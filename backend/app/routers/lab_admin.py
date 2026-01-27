from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session,joinedload
from app import models, schemas
from app.routers import hashing 
from app.database import get_db
from typing import List
from app.core import oauth2

router=APIRouter(tags=['Lab_admin'])



# approve project
@router.put("/api/lab_admin/approve/project/{project_id}", response_model=schemas.ProjectResponse)
def approve_project( project_id: int,db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    project = db.query(models.Project).filter(models.Project.project_id == project_id).first()
    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    # 3. Chỉ duyệt khi project đang pending
    if project.status != "pending":
        raise HTTPException(
            status_code=400,
            detail="Project is not in pending status"
        )
    # 4. Duyệt project
    project.status = "approved"
    db.commit()
    return project



#reject project
@router.put("/api/lab_admin/reject/project/{project_id}", response_model=schemas.ProjectResponse)
def reject_project( project_id: int,db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    project = db.query(models.Project).filter(models.Project.project_id == project_id).first()
    if not project:
        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    # 3. Chỉ tu choi khi project đang pending
    if project.status not in {"pending" , "approved"}:
        raise HTTPException(
            status_code=400,
            detail="Project is not in pending or approved status"
        )
    project.status = "rejected"
    db.commit()
    return project

#xoa project
@router.put("/api/lab_admin/delete/project/{project_id}", response_model=schemas.ProjectResponse)
def delete_project( project_id: int,db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    project = db.query(models.Project).filter(models.Project.project_id == project_id)
    if not project.first():
        raise HTTPException(
            status_code=404,
            detail="Project not found"
        )

    # 3. Chỉ xoa khi project đang rejected
    if project.first().status not in "rejected":
        raise HTTPException(
            status_code=400,
            detail="Project is not in rejected status"
        )

    project.delete(synchronize_session=False)
    db.commit()
    return {"detail":"project deletes successfully"}


#lay talent theo id
@router.get('/api/lab_admin/profile/talent/{id}', response_model=schemas.TalentResponse)
def get_talent_(id: int, db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    
    talent_profile = db.query(models.Talent).options(
        joinedload(models.Talent.user) 
    ).filter(models.Talent.user_id == id).first()
    
    if not talent_profile:
        raise HTTPException(status_code=404, detail="Không tìm thấy hồ sơ Talent")

    return talent_profile


# cho admin xem tat ca user
@router.get('/api/lab_admin/profile/user', status_code=status.HTTP_200_OK, response_model=List[schemas.UserResponse] )
def getall( db:Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    user = db.query(models.User).all()
    all_user=[]
    for u in user:
        all_user.append({'user_id':u.user_id,
                         'user_name':u.user_name,
                         'full_name':u.full_name,
                         'phone_number':u.phone_number,
                         'role_name':[ur.role.role_name for ur in u.roles],
                         'created_at':u.created_at})
    return all_user


#lay toan bo talent
@router.get('/api/lab_admin/profile/talent', response_model=list[schemas.TalentResponse])
def get_talent_full( db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    # Query từ Talent và Join sang User
    talent_profile =  db.query(models.Talent).all()
    
    return talent_profile

#xem toan bo mentor
@router.get('/api/lab_admin/profile/mentor', response_model=list[schemas.MentorResponse])
def get_mentor_full(db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    # Query từ Talent và Join sang User
    mentor_profile = db.query(models.Mentor).all()
    if not mentor_profile:
        raise HTTPException(status_code=404, detail="Không co ho so mentor nao")
    return mentor_profile


#xem toan bo company

@router.get('/api/lad_amin/profile/company', response_model=list[schemas.CompanyResponse])
def get_company_full(db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    # Query từ company và Join sang User
    company_profile = db.query(models.Company).all()
    if not company_profile:
        raise HTTPException(status_code=404, detail="Không tìm thấy hồ sơ Talent")
    return company_profile


#xem user theo id
@router.get('/api/lab_admin/profile/user/{id}', status_code=status.HTTP_200_OK, response_model=schemas.UserResponse)
def get_user(id,  db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    user = db.query(models.User).filter(models.User.user_id == id).first()
    if not user:
       raise HTTPException (status_code=status.HTTP_404_NOT_FOUND)
    userinfo={'user_id':user.user_id,
            'user_name':user.user_name,
            'full_name':user.full_name,
            'phone_number':user.phone_number,
            'role_name':[ur.role.role_name for ur in user.roles],
            'created_at':user.created_at
              }
    return userinfo


# xoa user
@router.delete('/api/lab_admin/delete/{id}', status_code=200 )
def delete_user(id:int, db: Session = Depends(get_db),current_user: schemas.UserBase=Depends(oauth2.require_role('lab_admin'))):
    user = db.query(models.User).filter(models.User.user_id == id)

    if not user.first():
        raise HTTPException(status_code=404, detail="User not foun  d")

    user.delete(synchronize_session=False)
    db.commit()
    return {"message": "User deleted successfully"}


