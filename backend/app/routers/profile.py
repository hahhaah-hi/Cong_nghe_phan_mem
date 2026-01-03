from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session, joinedload
from app import models, schemas
from app.routers import hashing
from app.database import get_db
from typing import List


router = APIRouter(
    tags=['Profile']) 


@router.get('/user/profile/talent/{id}', response_model=schemas.TalentResponse)
def get_talent_full(id: int, db: Session = Depends(get_db)):
    # Query từ Talent và Join sang User
    talent_profile = db.query(models.Talent).options(
        joinedload(models.Talent.user) 
    ).filter(models.Talent.user_id == id).first()
    
    if not talent_profile:
        raise HTTPException(status_code=404, detail="Không tìm thấy hồ sơ Talent")

    return talent_profile

#tạo hoặc cập nhật profile talent
@router.put('/user/profile/talent/{id}', response_model=schemas.TalentResponse)
def update_talent(id:int, request:schemas.TalentUpdate , db:Session=Depends(get_db)):
    user = db.query(models.User).filter(models.User.user_id == id) 
    if not user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='kh tim thay nguoi dung')
    u_talent = db.query(models.Talent).filter(models.Talent.user_id==id).first()
    if not u_talent:    
        u_talent=models.Talent(user_id=id,
            major=request.major,
            skills=request.skills,
            certifications=request.certifications,
            portfolio_url=request.portfolio_url)
        db.add(u_talent)
    u_talent.major = request.major
    u_talent.skills = request.skills
    u_talent.certifications = request.certifications
    u_talent.portfolio_url = request.portfolio_url
    u_talent.student_code = request.student_code
    db.commit()
    db.refresh(u_talent)
    return  u_talent

#mentor

#lấy profile mentor
@router.get('/user/profile/mentor/{id}', response_model=schemas.MentorResponse)
def get_mentor_full(id: int, db: Session = Depends(get_db)):
    # Query từ Talent và Join sang User
    mentor_profile = db.query(models.Company).options(
        joinedload(models.Company.user) 
    ).filter(models.Company.user_id == id).first()
    
    if not mentor_profile:
        raise HTTPException(status_code=404, detail="Không tìm thấy hồ sơ Talent")

    return mentor_profile

#cập nhật hoặc tạo profile mentor
@router.put('/user/profile/mentor/{id}', response_model=schemas.MentorResponse)
def update_mentor(id:int, request:schemas.MentorBase , db:Session=Depends(get_db)):
    user = db.query(models.User).filter(models.User.user_id == id) 
    if not user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='kh tim thay nguoi dung')
    u_mentor = db.query(models.Company).filter(models.Company.user_id==id).first()
    if not u_mentor:    
        u_mentor=models.Company(user_id=id,
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

#company

@router.get('/user/profile/company/{id}', response_model=schemas.CompanyResponse)
def get_company_full(id: int, db: Session = Depends(get_db)):
    # Query từ company và Join sang User
    company_profile = db.query(models.Company).options(
        joinedload(models.Company.user) 
    ).filter(models.Company.user_id == id).first()
    
    if not company_profile:
        raise HTTPException(status_code=404, detail="Không tìm thấy hồ sơ Talent")

    return company_profile
#company

@router.put('/user/profile/company/{id}', response_model=schemas.CompanyResponse)
def update_company(id:int, request:schemas.CompanyCreate , db:Session=Depends(get_db)):
    user = db.query(models.User).filter(models.User.user_id == id) 
    if not user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='kh tim thay nguoi dung')
    u_company = db.query(models.Company).filter(models.Company.user_id==id).first()
    if not u_company:    
        u_company=models.Company(user_id=id,
            company_name=request.company_name,
            department=request.department,
            description=request.description,
            website=request.website)
        db.add(u_company)
    u_company.company_name = request.company_name
    u_company.department = request.department
    u_company.description = request.description
    u_company.website = request.website
    db.commit()
    db.refresh(u_company)
    return  u_company
