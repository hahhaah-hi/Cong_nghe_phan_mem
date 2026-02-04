# app/routers/fund_distribution.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.fund_distribution import FundDistribution
from app.models.payment import Payment
from app.schemas.fund_distribution import (
    FundDistributionCreate,
    FundDistributionResponse
)
from app.dependencies import get_current_user

router = APIRouter(
    prefix="/fund-distribution",
    tags=["Fund Distribution"]
)

@router.post("/", response_model=FundDistributionResponse)
def create_fund_distribution(
    data: FundDistributionCreate,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):
    # kiểm tra project đã thanh toán chưa
    payment = db.query(Payment).filter(
        Payment.project_id == data.project_id,
        Payment.status == "paid"
    ).first()

    # chưa thanh toán thì không cho phân phối
    if not payment:
        raise HTTPException(
            status_code=400,
            detail="Dự án chưa được thanh toán"
        )

    # tạo dữ liệu phân phối quỹ
    distribution = FundDistribution(
        project_id=data.project_id,
        talent_amount=data.talent_amount,
        mentor_amount=data.mentor_amount,
        lab_amount=data.lab_amount,
        description=data.description
    )

    # lưu xuống database
    db.add(distribution)
    db.commit()
    db.refresh(distribution)

    return distribution


@router.get("/project/{project_id}", response_model=list[FundDistributionResponse])
def get_fund_distribution_by_project(
    project_id: int,
    db: Session = Depends(get_db)
):
    # lấy lịch sử phân phối quỹ theo project
    return db.query(FundDistribution)\
        .filter(FundDistribution.project_id == project_id)\
        .all()
