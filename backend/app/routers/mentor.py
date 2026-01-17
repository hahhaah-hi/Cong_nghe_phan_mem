from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing,oauth2
from app.database import get_db

router=APIRouter(tags='Mentor')

# @router.post('/mentor/project/{id}/accept/talent/{talent_id}',response_model=schemas.ProjectTeamResponse)
# def invite_team(id:int,talent_id:int, db:Session=Depends(get_db),current_user:schemas.UserBase=Depends(oauth2.require_role('mentor'))):
#     project=db.query(models.Project).filter(models.ProjectTeam.project_id==id).first()
#     if not project:
#        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='project khong ton tai')
#     talent=db.query(models.ProjectTeam).filter(models.ProjectTeam.talent_user_id).all()
#     return talent