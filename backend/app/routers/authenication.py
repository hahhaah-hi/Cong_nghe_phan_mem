from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.database import get_db
from typing import List
from passlib.context import CryptContext
from app.routers.hashing import Hash
from datetime import datetime, timedelta,timezone
from app.routers.token import create_access_token
router = APIRouter(
    tags=['Authenication'])


@router.post('/login', status_code=status.HTTP_202_ACCEPTED,response_model=schemas.Token)
def login_user(request:schemas.LoginRequest, db: Session=Depends(get_db)):
    login = db.query(models.User).filter(models.User.user_name==request.user_name).first()
    if not login:
        raise HTTPException (status_code=status.HTTP_404_NOT_FOUND, detail=f'invalid user')
    
    if not Hash.verify(login.password_hash,request.password):
         raise HTTPException (status_code=status.HTTP_404_NOT_FOUND, detail=f'incorect password')
    
    access_token = create_access_token(data={"sub": login.user_id})
    return {"access_token":access_token, "token_type":"bearer"}


# @router.post('/login', response_model=schemas.Token)
# def login_user(request: schemas.LoginRequest, db: Session = Depends(get_db)):
#     login = db.query(models.User).filter(models.User.user_name==request.user_name).first()
#     if not login:
#         raise HTTPException (status_code=status.HTTP_404_NOT_FOUND, detail=f'invalid user')
    
#     if not Hash.verify(login.password_hash,request.password):
#          raise HTTPException (status_code=status.HTTP_404_NOT_FOUND, detail=f'incorect password')
    
#     access_Token = create_access_token(data={"sub": login.user_id})
#     return {"access_token":access_Token, "token_type":"bearer"}


