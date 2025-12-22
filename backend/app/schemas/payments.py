# schemas/payment.py
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class PaymentCreate(BaseModel):
    project_id: int
    amount: float


class PaymentResponse(BaseModel):
    payment_id: int
    status: str
    paid_at: Optional[datetime]

    class Config:
        from_attributes = True
