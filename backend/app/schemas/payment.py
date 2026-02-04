# app/schemas/payment.py
from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime


class PaymentCreate(BaseModel):
    project_id: int
    amount: float = Field(gt=0)


class PaymentResponse(BaseModel):
    payment_id: int
    project_id: int
    company_id: str
    amount: float
    status: str
    paid_at: Optional[datetime]

    class Config:
        from_attributes = True
