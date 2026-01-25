from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing,oauth2
from app.database import get_db

router=APIRouter(tags=['Mentor'])


@router.put('/api/mentor', response_model=schemas.MentorResponse)
def update_mentor(request:schemas.MentorBase , db:Session=Depends(get_db), current_user:schemas.UserBase=Depends(oauth2.require_role('mentor'))):
    user = db.query(models.User).filter(models.User.user_id == current_user.user_id) 
    if not user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='kh tim thay nguoi dung')
    u_mentor = db.query(models.Mentor).filter(models.Mentor.user_id==current_user.user_id).first()
    if not u_mentor:    
        u_mentor=models.Mentor(user_id=current_user.user_id,
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