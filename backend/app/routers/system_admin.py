from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing
from app.database import get_db
from typing import List
from app.core import oauth2

router=APIRouter(tags=['System_admin'])


#gán role cho user
@router.post('/api/admin/assign_role/{u_role}')
def assign_role(u_role:str , id:int ,db:Session=Depends(get_db)):
    role= db.query(models.Role).filter(models.Role.role_name==u_role).first()
    if not role:
        raise HTTPException (status_code=status.HTTP_404_NOT_FOUND, detail=f'invalid roles')
    
    user=db.query(models.User).filter(models.User.user_id==id).first()
    if not user:
        raise HTTPException (status_code=status.HTTP_404_NOT_FOUND, detail=f'invalid roles')
    
    ktra_role=db.query(models.UserRole).filter(models.UserRole.user_id==id,models.UserRole.role_id==role.role_id).first()
    if ktra_role:
        raise HTTPException (status_code=status.HTTP_404_NOT_FOUND, detail=f'invalid roles')
    
    new_assignment = models.UserRole(user_id=id, role_id=role.role_id)
    db.add(new_assignment)
    db.commit()

    return {"message": f"Đã gán thành công role {u_role} cho user id {id}"}


#gỡ role
@router.delete('/api/admin/remove_role/{u_role}')
def remove_role(u_role: str, id: int, db: Session = Depends(get_db)):
    role = db.query(models.Role).filter(models.Role.role_name == u_role).first()
    if not role:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Role {u_role} không tồn tại')
    
    assignment = db.query(models.UserRole).filter(
        models.UserRole.user_id == id,
        models.UserRole.role_id == role.role_id
    ).first()
    
    if not assignment:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f'User id {id} hiện không có quyền {u_role}'
        )
    db.delete(assignment)
    db.commit()

    return {"message": f"Đã gỡ thành công role {u_role} khỏi user id {id}"}