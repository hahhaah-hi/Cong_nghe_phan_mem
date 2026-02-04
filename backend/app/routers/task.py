from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing 
from app.database import get_db
from app.core import oauth2
from typing import List


router=APIRouter( tags=['Task'])


@router.post('/api/task',response_model=schemas.TaskResponse)
def post_task(request:schemas.TaskCreate,db:Session=Depends(get_db),current_user :schemas.UserBase=Depends(oauth2.require_role('mentor'))):
    project=db.query(models.Project).filter(models.Project.project_id==request.project_id).first()
    if not project:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail='khong co project nay')
    
    if project.status=='reject':
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail='project bi tu choi')
    talent=db.query(models.Talent).filter(models.Talent.user_id==request.assigned_to).first()

    if not talent:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail='khong co talent') 

    
    new_task=models.Task(title=request.title,
                         project_id=request.project_id,
                         assigned_by=current_user.user_id,
                         assigned_to=request.assigned_to,
                         description=request.description,
                         deadline=request.deadline)
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task

