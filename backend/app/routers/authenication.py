from fastapi import APIRouter,Depends, status,  HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.database import get_db
from app.routers import hashing
from app.routers.token import create_access_token
from fastapi.security import OAuth2PasswordRequestForm
router = APIRouter(
    tags=['Authenication'])

# đăng kí tài khoản sinh viên
@router.post('/register' , status_code = status.HTTP_201_CREATED, response_model=schemas.UserResponse)
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

@router.post('/login', status_code=status.HTTP_202_ACCEPTED,response_model=schemas.Token)
def login_user(request:OAuth2PasswordRequestForm = Depends(), db: Session=Depends(get_db)):
    login = db.query(models.User).filter(models.User.user_name==request.username).first()
    if not login:
        raise HTTPException (status_code=status.HTTP_404_NOT_FOUND, detail=f'invalid user')
    
    if not hashing.Hash.verify(login.password_hash,request.password):
         raise HTTPException (status_code=status.HTTP_404_NOT_FOUND, detail=f'incorect password')
    
    user_roles = [ur.role.role_name for ur in login.roles]
    access_token = create_access_token(data={"sub": login.user_name,
                                             "role": user_roles})
    return {"access_token":access_token, "token_type":"bearer"}



