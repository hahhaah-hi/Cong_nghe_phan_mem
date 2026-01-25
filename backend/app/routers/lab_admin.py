from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing,oauth2
from app.database import get_db

router=APIRouter(tags=['Lab_admin'])


@router.get('/api//lab_admin/mentor', response_model=list[schemas.MentorResponse])
def get_mentor_full(db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    # Query từ Talent và Join sang User
    mentor_profile = db.query(models.Mentor).all()
    if not mentor_profile:
        raise HTTPException(status_code=404, detail="Không co ho so mentor nao")
    return mentor_profile
