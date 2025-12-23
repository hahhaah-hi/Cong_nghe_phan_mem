from typing import List
from fastapi import FastAPI, Depends, status, Response, HTTPException
from app import models, schemas
from app.database import engine, SessionLocal
from sqlalchemy.orm import Session
from passlib.context import CryptContext


app = FastAPI()

#password hashing
pwd_cxt = CryptContext(schemes=["bcrypt"], deprecated="auto")

models.Base.metadata.create_all(bind=engine)

def get_db(): 
    db = SessionLocal() 
    try: 
        yield db 
    finally: 
        db.close()

#lấy tất cả user 
@app.get('/user', status_code=status.HTTP_200_OK, response_model=List[schemas.UserResponse])
def getall( db: Session = Depends(get_db)):
    getuser = db.query(models.User).all()
    return getuser

#tạo mới user
#  hash password chua lam duoc
@app.post('/user', status_code=status.HTTP_201_CREATED )
def create_user(request: schemas.UserCreate, db: Session = Depends(get_db)):
    hashed_password = pwd_cxt.hash(request.password)
    new_user = models.User(user_name=request.user_name ,full_name=request.full_name,phone_number=request.phone_number , 
                           password_hash=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@app.get('/user/{id}', status_code=200, response_model=schemas.UserResponse)
def get_user(id, response: Response, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.user_id == id).first()
    if not user:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"detail": f"User not found"} 
    return user    

# xóa user theo id
@app.delete('/user/{id}', status_code=status.HTTP_204_NO_CONTENT)
def delete_user(id, db: Session = Depends(get_db)):
    user= db.query(models.User).filter(models.User.user_id == id)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User with id {id} not found")
    user.delete(synchronize_session=False)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)

# cập nhật user theo id
@app.put('/user/{id}', status_code=status.HTTP_202_ACCEPTED)
def update_user(id, request:schemas.UserUpdate, db: Session = Depends(get_db)):
    user=db.query(models.User).filter(models.User.user_id == id)
    if not user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User with id {id} not found")
    user.update({
        models.User.full_name: request.full_name,
        models.User.phone_number: request.phone_number,
        models.User.password_hash: request.password
    })
    db.commit()
    return 'updated'