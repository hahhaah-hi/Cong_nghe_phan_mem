from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing,oauth2
from app.database import get_db
from typing import List




router = APIRouter(
    tags=['Users']
    ) 

#phân quyền cho admin xem tat ca user
@router.get('/user', status_code=status.HTTP_200_OK, response_model=List[schemas.UserResponse], tags=["Users"])
def getall( db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('admin'))):
    get_user = db.query(models.User).all()
    return get_user
# xem user theo id
@router.get('/user/{id}', status_code=200, response_model=schemas.UserResponse, tags=["Users"])
def get_user(id,  db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.user_id == id).first()
    if not user:
       raise HTTPException (status_code=status.HTTP_404_NOT_FOUND)
    return user    

@router.get('/user/profile')
# cap nhat user
@router.put('/user/{id}', status_code=status.HTTP_202_ACCEPTED, tags=["Users"])
def update_user(id, request:schemas.UserUpdate, db: Session = Depends(get_db)):
    user=db.query(models.User).filter(models.User.user_id == id)
    if not user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User with id {id} not found")
    user.update({
        "full_name": request.full_name,
        "phone_number": request.phone_number,
        "password_hash": hashing.Hash.bcrypt(request.password)
    })
    db.commit()
    return 'updated'
# xoa user
@router.delete('/user/{id}', status_code=200, tags=["Users"])
def delete_user(id:int, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.user_id == id)

    if not user.first():
        raise HTTPException(status_code=404, detail="User not found")

    user.delete(synchronize_session=False)
    db.commit()
    return {"message": "User deleted successfully"}

