from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing 
from app.database import get_db
from app.core import oauth2
from typing import List

router=APIRouter(tags=['Mentor'])

@router.put('/api/mentor/update', response_model=schemas.MentorResponse)
def update_mentor( request:schemas.MentorBase , db:Session=Depends(get_db),current_user:schemas.UserBase=Depends(oauth2.require_role('mentor'))):
    user = db.query(models.User).filter(models.User.user_id == current_user.user_id) 
    if not user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='kh tim thay nguoi dung')
    u_mentor = db.query(models.Mentor).filter(models.Mentor.user_id== current_user.user_id).first()
    if not u_mentor:    
        u_mentor=models.Mentor(user_id= current_user.user_id,
            expertise=request.expertise,
            years_experience=request.years_experience,
            status=request.status)
        db.add(u_mentor)
    u_mentor.expertise = request.expertise
    u_mentor.years_experience = request.years_experience
    u_mentor.status = request.status
    db.commit()
    db.refresh(u_mentor)
    return  u_mentor

# duyệt talent 
@router.put('/api/mentor/project/{id}/improve/member/{member_id}', status_code= status.HTTP_200_OK,response_model=schemas.ProjectTeamResponse)
def project_team(id,member_id,db:Session=Depends(get_db), current_user: Session=Depends(oauth2.require_role('mentor'))):
    project=db.query(models.ProjectTeam).filter(models.ProjectTeam.project_id==id).first()
    if not project:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail='project not found')
    
    member = db.query(models.ProjectTeam).filter(models.ProjectTeam.project_id==id,models.ProjectTeam.talent_user_id==member_id).first()
    if not member:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail='member not found')
    
    if member.status !='pending':
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=' member improved')
    
    member.status='improve'
    db.commit()
    
    return member



#từ chối talent
@router.put('/api/metor/project/{id}/reject/member/{member_id}', status_code= status.HTTP_200_OK,response_model=schemas.ProjectTeamResponse)
def project_team(id,member_id,db:Session=Depends(get_db), current_user:schemas.UserBase=Depends(oauth2.require_role('mentor'))):
    project=db.query(models.ProjectTeam).filter(models.ProjectTeam.project_id==id).first()
    if not project:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail='project not found')
    
    member = db.query(models.ProjectTeam).filter(models.ProjectTeam.project_id==id,models.ProjectTeam.talent_user_id==member_id).first()
    if not member:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail='member not found')
    
    if member.status !='pending':
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail=' member improved or rejected')
    
    member.status='reject'
    db.commit()
    return member

#  cho phep mentor xem task đã giao
@router.get('/api/mentor/task/assign',response_model=list[schemas.TaskResponse])
def get_task(db:Session=Depends(get_db),current_user:schemas.UserBase=Depends(oauth2.require_role('mentor'))):
    task=db.query(models.Task).filter(models.Task.assigned_by==current_user.user_id).all()
    if not task:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail='mentor nay chua giao task nao')
    return task

# cho phep chinh sua task
@router.put('/api/mentor/update/task/{id}',response_model=schemas.TaskResponse)
def update_task(id,request:schemas.TaskUpdate,db:Session=Depends(get_db),current_user:schemas.UserBase=Depends(oauth2.require_role('mentor'))):
    task=db.query(models.Task).filter(models.Task.task_id==id).first()
    if not task:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail='khong tim thay task co id {id}')
    
    task.title = request.title
    task.status = request.status
    task.assigned_to = request.assigned_to
    task.description = request.description
    db.commit()
     
    return task