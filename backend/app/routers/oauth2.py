from fastapi import Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordBearer 
from app.database import get_db
from app.routers import token
from app import models

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

    return {
        "user": user,
        "roles": token_data.role_name
    }
# kiem tra role
def require_role(role: str):
    def role_checker(
        current=Depends(get_current_user)
    ):
        if role not in current["roles"]:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Not enough permissions"
            )
        return current["user"]
    return role_checker
