from fastapi import APIRouter,Depends, status,  HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.database import get_db
from app.routers import hashing
from app.core.token import create_access_token
from fastapi.security import OAuth2PasswordRequestForm
router = APIRouter(
    tags=['Authenication'])

# đăng kí tài khoản sinh viên

@router.post('/api/auth/register', status_code=201, response_model=schemas.UserResponse)
def register(request: schemas.UserCreate, db: Session = Depends(get_db)):
    new_user =db.query(models.User).filter(models.User.user_name == request.user_name).first()
    # 1. Check user tồn tại
    if new_user:
        raise HTTPException(400, "User already exists")

    # 2. Tạo user
    new_user = models.User(
        user_name=request.user_name,
        full_name=request.full_name,
        phone_number=request.phone_number,
        password_hash=hashing.Hash.bcrypt(request.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    # 3. Lấy nhiều role theo list
    roles = db.query(models.Role).filter(models.Role.role_name.in_(request.role_name)).all()
              
    # 4. Validate role tồn tại đủ
    if len(roles) != len(request.role_name):
        found = {r.role_name for r in roles}
        missing = set(request.role_name) - found
        raise HTTPException(400, f"Role not found: {missing}")

    # 5. Insert nhiều dòng user_role
    for role in roles:
        db.add(models.UserRole(
            user_id=new_user.user_id,
            role_id=role.role_id
        ))

    db.commit()

    return new_user

@router.post('/api/auth/login', status_code=status.HTTP_202_ACCEPTED,response_model=schemas.Token)
def login_user(request:OAuth2PasswordRequestForm = Depends(), db: Session=Depends(get_db)):
    login = db.query(models.User).filter(models.User.user_name==request.username).first()
    if not login:
        raise HTTPException (status_code=status.HTTP_404_NOT_FOUND, detail=f'invalid user')
    
    if not hashing.Hash.verify(login.password_hash,request.password):
         raise HTTPException (status_code=status.HTTP_404_NOT_FOUND, detail=f'incorect password')
    
    user_roles = [ur.role.role_name for ur in login.roles]
    access_token = create_access_token(data={"user_id":login.user_id,
                                            "user_name": login.user_name,
                                             "roles": user_roles})
    return {"access_token":access_token, "token_type":"bearer"}



