from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing
from app.database import get_db
from typing import List


router = APIRouter(
    tags=['Company']
    ) 

@router.post('/user/company/register/{id}')
def register_cty(id:int, request:schemas.CompanyCreate,db:Session = Depends(get_db)):
    user=db.query(models.User).filter(models.User.user_id==id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User with id {id} not found")
    company=models.Company(company_id=request.company_id,
                           user_id=id,
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

    
