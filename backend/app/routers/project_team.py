from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing 
from app.database import get_db
from typing import List
from app.core import oauth2

router=APIRouter(tags=['Project_Team'])
# hiển thị danh sách talent
@router.get('/api/project/{id}/project_team/', status_code= status.HTTP_200_OK,response_model=List[schemas.ProjectTeamResponse])
def project_team(id,db:Session=Depends(get_db), current_user: Session=Depends(oauth2.require_role('mentor'))):
    member=db.query(models.ProjectTeam).filter(models.ProjectTeam.project_id==id).all()
    if not member:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail='project not found')
    return member




# is leader
@router.post('/api/project_team/{id}/leader/{talent_id}/',status_code=status.HTTP_200_OK, response_model=schemas.ProjectTeamResponse)
def isleader(id:int,talent_id:int, db:Session=Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('mentor'))):
    project=db.query(models.ProjectTeam).filter(models.ProjectTeam.project_id==id).first()
    if not project:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail='project not found')
    
    talent=db.query(models.ProjectTeam).filter(models.ProjectTeam.project_id==id,models.ProjectTeam.talent_user_id==talent_id).first()
    if not talent:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail='talent not found')
    
    if talent.is_leader:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail='talent is already leader')
    
    existed_leader = db.query(models.ProjectTeam).filter( models.ProjectTeam.project_id == id,models.ProjectTeam.is_leader == True).first()
    if existed_leader:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail='project already has a leader'
        )

    talent.is_leader = True
    db.commit()
    return talent