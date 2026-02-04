from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.report import Report
from app.schemas.report import ReportCreate, ReportResponse
from app.dependencies import get_current_user

router = APIRouter(prefix="/reports", tags=["Reports"])


#  Mentor tạo report cho project
@router.post("", response_model=ReportResponse)
def create_report(
    payload: ReportCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    if current_user.role_name != "mentor":
        raise HTTPException(status_code=403, detail="Only mentor can create report")

    report = Report(
        project_id=payload.project_id,
        mentor_user_id=current_user.user_id,
        report_type=payload.report_type,
        content=payload.content
    )

    db.add(report)
    db.commit()
    db.refresh(report)

    return report


#  Lấy report theo project (mentor / admin / company / talent)
@router.get("/project/{project_id}", response_model=list[ReportResponse])
def get_reports_by_project(
    project_id: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    if current_user.role_name not in [
        "mentor", "lab_admin", "system_admin", "company", "talent"
    ]:
        raise HTTPException(status_code=403, detail="Permission denied")

    reports = (
        db.query(Report)
        .filter(Report.project_id == project_id)
        .order_by(Report.created_at.desc())
        .all()
    )

    return reports


#  Admin xem tất cả report
@router.get("", response_model=list[ReportResponse])
def get_all_reports(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    if current_user.role_name not in ["lab_admin", "system_admin"]:
        raise HTTPException(status_code=403, detail="Permission denied")

    return db.query(Report).order_by(Report.created_at.desc()).all()
