from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing 
from app.database import get_db
from app.core import oauth2

router=APIRouter( tags=['Talent'])

@router.get('/api/talent/list_project' , status_code=status.HTTP_200_OK, response_model=list[schemas.ProjectResponse])
def list_project(db:Session=Depends(get_db), current_user:schemas.UserBase=Depends(oauth2.require_role('talent'))):
    project=db.query(models.Project).filter(models.Project.status=='approved').all()
    return project 


@router.post('/api/talent/project/{id}/join')
def join_project(id:int,db:Session=Depends(get_db), current_user:schemas.UserBase=Depends(oauth2.require_role('talent'))):
    project=db.query(models.Project).filter(models.Project.project_id ==id).first()
    if not project:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='project khong ton tai')
    
    existed= db.query(models.ProjectTeam).filter( models.ProjectTeam.project_id == id,
                                                 models.ProjectTeam.talent_user_id==current_user.user_id).first()
    
    if existed:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail='nguoi dung da ton tai')
    
    member = models.ProjectTeam(
        project_id=id,
        talent_user_id=current_user.user_id,
        status="pending")
    db.add(member)
    db.commit()
    return {"message": " gui yeu cầu tham gia thành công"}



#tạo hoặc cập nhật profile talent
@router.put('/api/profile/talent', response_model=schemas.TalentResponse)
def update_talent( request:schemas.TalentUpdate , db:Session=Depends(get_db),current_user:schemas.UserBase=Depends(oauth2.require_role(['talent']))):
    user = db.query(models.User).filter(models.User.user_id == current_user.user_id) 
    if not user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='kh tim thay nguoi dung')
    u_talent = db.query(models.Talent).filter(models.Talent.user_id==current_user.user_id).first()
    if not u_talent:    
        u_talent=models.Talent(user_id=current_user.user_id,
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
