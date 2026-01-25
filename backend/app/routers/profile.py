from fastapi import APIRouter,Depends, status, HTTPException
from sqlalchemy.orm import Session, joinedload
from app import models, schemas
from app.routers import hashing,oauth2
from app.database import get_db
from typing import List


router = APIRouter(
    tags=['Profile']) 



#lấy thông tin cá nhân
@router.get('/api/profile/me', response_model=schemas.UserResponse)
def get_me(current_user:schemas.UserBase =Depends(oauth2.get_current_user)):
    return {
        "user_id": current_user.user_id,
        "user_name": current_user.user_name,
        "full_name": current_user.full_name,
        "phone_number":current_user.phone_number,
        "role_name": [ur.role.role_name for ur in current_user.roles],
        "created_at":current_user.created_at
    }
   
#cap nhat user

@router.put('/api/profile/me', status_code=status.HTTP_202_ACCEPTED,)
def update_user(request:schemas.UserUpdate, db: Session = Depends(get_db),current_user:schemas.UserBase =Depends(oauth2.get_current_user)):
    user=db.query(models.User).filter(models.User.user_id == current_user.user_id)
    user.update({
        "full_name": request.full_name,
        "phone_number": request.phone_number,
        "password_hash": hashing.Hash.bcrypt(request.password)
    })
    db.commit()
    return 'updated'



