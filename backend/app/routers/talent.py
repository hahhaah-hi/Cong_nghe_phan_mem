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