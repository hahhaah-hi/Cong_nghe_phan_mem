# app/routers/payment.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.payment import Payment
from app.schemas.payment import PaymentCreate, PaymentResponse
from app.dependencies import get_current_user

router = APIRouter(prefix="/payments", tags=["Payments"])


@router.post("", response_model=PaymentResponse)
def create_payment(
    payload: PaymentCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    # chỉ company mới được tạo payment
    if current_user.role != "company":
        raise HTTPException(status_code=403, detail="Only company can create payment")

    payment = Payment(
        project_id=payload.project_id,
        company_id=current_user.company_id,
        amount=payload.amount
    )

    db.add(payment)
    db.commit()
    db.refresh(payment)

    return payment
