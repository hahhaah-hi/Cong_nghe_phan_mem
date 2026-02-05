from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class FundDistributionCreate(BaseModel):
    project_id: int
    talent_amount: float
    mentor_amount: float
    lab_amount: float
    description: Optional[str] = None


class FundDistributionResponse(BaseModel):
    distribution_id: int
    project_id: int
    talent_amount: float
    mentor_amount: float
    lab_amount: float
    description: Optional[str]
    processed_at: Optional[datetime]

    class Config:
        from_attributes = True
