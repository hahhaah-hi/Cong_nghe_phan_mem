from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing
from app.core import oauth2
from app.database import get_db
from typing import List


router = APIRouter(
    tags=['Company']
    ) 

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
@router.put('/api/profile/company', response_model=schemas.CompanyResponse)
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

    
@router.post('/api/company/post/project', status_code=201)
def create_project( request: schemas.ProjectCreate, db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('company'))):

    # 2. Check mentor tồn tại
    mentor = (
        db.query(models.User).join(models.UserRole).join(models.Role)
        .filter(models.User.user_id == request.mentor_user_id,models.Role.role_name == "mentor")
        .first()
    )
    if not mentor:
        raise HTTPException(400, "Mentor not found or invalid")

    # 3. Tạo project
    project = models.Project(
        title=request.title,
        description=request.description,
        deadline=request.deadline,
        company_id=request.company_id,
        mentor_user_id=request.mentor_user_id
    )

    db.add(project)
    db.commit()
    db.refresh(project)

    return project