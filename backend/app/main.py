from fastapi import FastAPI, Depends
from app import models, schemas
from app.database import engine, SessionLocal
from sqlalchemy.orm import Session
app = FastAPI()


models.Base.metadata.create_all(bind=engine)

def get_db(): 
    db = SessionLocal() 
    try: 
        yield db 
    finally: 
        db.close()

#lấy tất cả user 
@app.get('/user')
def getall(db: Session = Depends(get_db)):
    getuser = db.query(models.User).all()
    return getuser

#tạo mới user
@app.post('/user')
def create_user(request: schemas.UserCreate, db: Session = Depends(get_db)):
    new_user = models.User(user_name=request.user_name ,password_hash=request.password ,phone_number=request.phone_number , full_name=request.full_name)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user
