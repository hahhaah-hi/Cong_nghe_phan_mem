from fastapi import Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer 
from app.database import get_db
from app.routers import token
from app import models,schemas
from jose import JWTError, jwt
from app.schemas import user_roles


SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

oauth2_scheme=OAuth2PasswordBearer(tokenUrl='login')

def get_current_user(data:str = Depends(oauth2_scheme), db:Session=Depends(get_db)):
    credential_exception = HTTPException( status_code=status.HTTP_401_UNAUTHORIZED,
                                         detail='could not validate credentials',
                                         headers={"WWW-Authenticate":"bearer"})

    token_data = token.verify_token(data, credential_exception)

    user = db.query(models.User).filter(
        models.User.user_name == token_data.user_name
    ).first()

    if user is None:
        raise credential_exception

    return user



# kiem tra role
def require_role(role: str):
    def role_checker(current:models.User=Depends(get_current_user)):
        user_roles = [ur.role.role_name for ur in current.roles]
        if role not in user_roles:      
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Not enough permissions"
            )
        return current
    return role_checker
