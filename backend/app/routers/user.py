from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing
from app.database import get_db
from typing import List
from passlib.context import CryptContext




router = APIRouter(
    tags=['Users']
    ) 

#xem tat ca user
@router.get('/user', status_code=status.HTTP_200_OK, response_model=List[schemas.UserResponse], tags=["Users"])
def getall( db: Session = Depends(get_db)):
    getuser = db.query(models.User).all()
    return getuser
# xem user theo id

@router.get('/user/{id}', status_code=200, response_model=schemas.UserResponse, tags=["Users"])
def get_user(id, response: Response, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.user_id == id).first()
    if not user:
       raise HTTPException (status_code=status.HTTP_404_NOT_FOUND)
    return user    


pwd_cxt = CryptContext(schemes=["bcrypt"], deprecated="auto")
# tao user moi
@router.post('/user' , status_code = status.HTTP_201_CREATED, response_model=schemas.UserResponse, tags=["Users"])
def register(request: schemas.UserCreate, db: Session = Depends(get_db)):
   # mã hóa password trước khi lưu vào db
    new_user = models.User(user_name=request.user_name ,full_name=request.full_name,phone_number=request.phone_number, 
                           password_hash=hashing.Hash.bcrypt(request.password))
    #check xem user_name đã tồn tại chưa neu chua thi tao moi
    if db.query(models.User).filter(models.User.user_name == request.user_name).first():
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                            detail=f"User with user_name {request.user_name} already exists")
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user
# cap nhat user
@router.put('/user/{id}', status_code=status.HTTP_202_ACCEPTED, tags=["Users"])
def update_user(id, request:schemas.UserUpdate, db: Session = Depends(get_db)):
    hashedPassword = pwd_cxt.hash(request.password)
    user=db.query(models.User).filter(models.User.user_id == id)
    if not user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User with id {id} not found")
    user.update({
        "full_name": request.full_name,
        "phone_number": request.phone_number,
        "password_hash": hashedPassword
    })
    db.commit()
    return 'updated'
# xoa user
@router.delete('/user/{id}', status_code=200, tags=["Users"])
def delete_user(id:int, db: Session = Depends(get_db)):
    user_query = db.query(models.User).filter(models.User.user_id == id)
    user= user_query.first()

    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    user_query.delete(synchronize_session=False)
    db.commit()
    return {"message": "User deleted successfully"}