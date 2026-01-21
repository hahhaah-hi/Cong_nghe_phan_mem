from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing,oauth2
from app.database import get_db
from typing import List


router=APIRouter(tags=['Project_Team'])

@router.get('/mentor/project/{id}/project_team/', status_code= status.HTTP_200_OK,response_model=List[schemas.ProjectTeamResponse])
def project_team(id,db:Session=Depends(get_db), current_user: Session=Depends(oauth2.require_role('mentor'))):
    member=db.query(models.ProjectTeam).filter(models.ProjectTeam.project_id==id).all()
    if not member:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail='project not found')
    return member

@router.put('/mentor/project/{id}/member/{member_id}/', status_code= status.HTTP_200_OK,response_model=schemas.ProjectTeamResponse)
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

