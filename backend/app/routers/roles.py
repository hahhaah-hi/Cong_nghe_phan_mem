from fastapi import APIRouter,Depends, status,  HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.database import get_db
from app.routers import hashing
from app.routers.token import create_access_token

router = APIRouter(
    tags=['Roles'])

#gán role cho user
@router.post('/admin/assign_role/{u_role}')
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
@router.delete('/admin/remove_role/{u_role}')
def remove_role(u_role: str, id: int, db: Session = Depends(get_db)):
    # 1. Tìm Role để lấy role_id
    role = db.query(models.Role).filter(models.Role.role_name == u_role).first()
    if not role:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f'Role {u_role} không tồn tại')
    
    # 2. Tìm bản ghi trong bảng UserRole (cầu nối giữa User và Role)
    assignment = db.query(models.UserRole).filter(
        models.UserRole.user_id == id,
        models.UserRole.role_id == role.role_id
    ).first()
    
    # 3. Nếu không tìm thấy bản ghi nghĩa là User vốn dĩ không có quyền này
    if not assignment:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail=f'User id {id} hiện không có quyền {u_role}'
        )
    
    # 4. Thực hiện xóa bản ghi
    db.delete(assignment)
    db.commit()

    return {"message": f"Đã gỡ thành công role {u_role} khỏi user id {id}"}