from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm

from app.database import get_db
from app.models.user import User
from app.models.roles import Role
from app.models.user_roles import UserRole
from app.schemas.user import UserCreate, UserResponse
from app.schemas.auth import Token
from app.routers.hashing import Hash
from app.core.token import create_access_token

router = APIRouter(
    tags=['Authenication']
)

# đăng kí tài khoản
@router.post('/api/auth/register', status_code=201, response_model=UserResponse)
def register(request: UserCreate, db: Session = Depends(get_db)):

    # check user tồn tại
    user = db.query(User).filter(User.user_name == request.user_name).first()
    if user:
        raise HTTPException(status_code=400, detail="User already exists")

    # tạo user
    new_user = User(
        user_name=request.user_name,
        full_name=request.full_name,
        phone_number=request.phone_number,
        password_hash=Hash.bcrypt(request.password)
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    # lấy role
    roles = db.query(Role).filter(Role.role_name.in_(request.role_name)).all()

    if len(roles) != len(request.role_name):
        raise HTTPException(status_code=400, detail="Role not found")

    # thêm user_role
    for role in roles:
        db.add(UserRole(
            user_id=new_user.user_id,
            role_id=role.role_id
        ))

    db.commit()
    return new_user


@router.post('/api/auth/login', status_code=status.HTTP_202_ACCEPTED, response_model=Token)
def login_user(
    request: OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db)
):
    user = db.query(User).filter(User.user_name == request.username).first()
    if not user:
        raise HTTPException(status_code=404, detail="Invalid user")

    if not Hash.verify(user.password_hash, request.password):
        raise HTTPException(status_code=404, detail="Incorrect password")

    user_roles = [ur.role.role_name for ur in user.roles]

    access_token = create_access_token(
        data={
            "user_id": user.user_id,
            "user_name": user.user_name,
            "roles": user_roles
        }
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }
