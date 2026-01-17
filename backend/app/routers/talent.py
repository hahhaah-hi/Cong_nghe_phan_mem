from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing,oauth2
from app.database import get_db

router=APIRouter( tags=['Talent'])

@router.get('/talent/list_project' , status_code=status.HTTP_200_OK, response_model=list[schemas.ProjectResponse])
def list_project(db:Session=Depends(get_db), current_user:schemas.UserBase=Depends(oauth2.require_role('talent'))):
    project=db.query(models.Project).filter(models.Project.status=='approved').all()
    return project 


@router.post('/talent/project/{id}/join')
def join_project(id:int,db:Session=Depends(get_db), current_user:schemas.UserBase=Depends(oauth2.require_role('talent'))):
    project=db.query(models.Project).filter(models.Project.project_id ==id).first()
    if not project:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='project khong ton tai')
    
    existed= db.query(models.ProjectTeam).filter( models.ProjectTeam.project_id == id,
                                                 models.ProjectTeam.talent_user_id==current_user.user_id).first()
    
    if existed:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail='nguoi dung da ton tai')
    
    member = models.ProjectTeam(
        project_id=id,
        talent_user_id=current_user.user_id,
        status="pending")
    db.add(member)
    db.commit()
    return {"message": " gui yeu cầu tham gia thành công"}
