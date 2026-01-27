from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing 
from app.database import get_db
from typing import List
from app.core import oauth2


router = APIRouter(
    tags=['Company']
    ) 


@router.post('/api/company/register/{id}')
def register_cty(id:int, request:schemas.CompanyCreate,db:Session = Depends(get_db)):
    user=db.query(models.User).filter(models.User.user_id==id).first()

@router.post('/api/company/register')
def register_cty( request:schemas.CompanyCreate,db:Session = Depends(get_db),current_user:schemas.UserBase=Depends(oauth2.require_role('company'))):
    user=db.query(models.User).filter(models.User.user_id==current_user.user_id).first()

    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User with id {id} not found")
    company=models.Company(company_id=request.company_id,
                           user_id=current_user.user_id,
                           company_name=request.company_name,
                           department=request.department,
                           description=request.description,
                           website=request.website
                        #    verified=request.verified
                           )
    if db.query(models.Company).filter(models.Company.company_name==request.company_name).first():
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,
                        detail=f"Company with company_name {request.company_name} already exists")

    db.add(company)
    db.commit()
    db.refresh(company)
    return company

# update company
@router.put('/api/company/update', response_model=schemas.CompanyResponse)
def update_company(id:int, request:schemas.CompanyCreate , db:Session=Depends(get_db),current_user:schemas.UserBase=Depends(oauth2.require_role('company'))):
    user = db.query(models.User).filter(models.User.user_id == current_user.user_id) 
    if not user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='kh tim thay nguoi dung')
    u_company = db.query(models.Company).filter(models.Company.user_id==current_user.user_id).first()
    if not u_company:   
        u_company=models.Company(user_id=current_user.user_id,
            company_id=request.company_id,
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

#post project

    
@router.get('/api/company/{id}', response_model=list[schemas.CompanyResponse])
def get_company_full(db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    # Query từ company và Join sang User
    company_profile = db.query(models.Company).all()
    if not company_profile:
        raise HTTPException(status_code=404, detail="Không tìm thấy hồ sơ company")
    return company_profile

 
