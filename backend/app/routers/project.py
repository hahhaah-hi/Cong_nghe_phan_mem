from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing,oauth2
from app.database import get_db
from typing import List


router=APIRouter(tags=['Project'])
    
@router.post('/company/project/post', status_code=201)
def create_project( request: schemas.ProjectCreate, db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('company'))):

    # 2. Check mentor tồn tại
    mentor = (
        db.query(models.User).join(models.UserRole).join(models.Role)
        .filter(models.User.user_id == request.mentor_user_id,models.Role.role_name == "mentor")
        .first()
    )
    if not mentor:
        raise HTTPException(400, "Mentor not found or invalid")

    # 3. Tạo project
    project = models.Project(
        title=request.title,
        description=request.description,
        deadline=request.deadline,
        company_id=request.company_id,
        mentor_user_id=request.mentor_user_id
    )

    db.add(project)
    db.commit()
    db.refresh(project)

    return project
# update project
@router.put("/lab_admin/{project_id}/approve", response_model=schemas.ProjectResponse)
def approve_project( project_id: int,db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    project = db.query(models.Project).filter(models.Project.project_id == project_id).first()
    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    # 3. Chỉ duyệt khi project đang pending
    if project.status != "pending":
        raise HTTPException(
            status_code=400,
            detail="Project is not in pending status"
        )
    # 4. Duyệt project
    project.status = "approved"
    db.commit()
    return project

# từ chối project
@router.put("/lab_admin/{project_id}/reject", response_model=schemas.ProjectResponse)
def reject_project( project_id: int,db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    project = db.query(models.Project).filter(models.Project.project_id == project_id).first()
    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    # 3. Chỉ duyệt khi project đang pending
    if project.status not in {"pending" , "approved"}:
        raise HTTPException(
            status_code=400,
            detail="Project is not in pending or approved status"
        )
    # 4. Duyệt project
    project.status = "rejected"
    db.commit()
    return project

#xóa project
@router.put("/lab_admin/{project_id}/delete", response_model=schemas.ProjectResponse)
def delete_project( project_id: int,db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    project = db.query(models.Project).filter(models.Project.project_id == project_id)
    if not project.first():
        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    # 3. Chỉ duyệt khi project đang rejected
    if project.first().status not in "rejected":
        raise HTTPException(
            status_code=400,
            detail="Project is not in rejected status"
        )
    
    project.delete(synchronize_session=False)
    db.commit()
    return {"detail":"project deletes successfully"}