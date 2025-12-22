# schemas/fund_distribution.py
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class FundDistributionResponse(BaseModel):
    distribution_id: int
    talent_amount: Optional[float]
    mentor_amount: Optional[float]
    lab_amount: Optional[float]
    processed_at: datetime

    class Config:
        from_attributes = True
