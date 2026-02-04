from pydantic import BaseModel
from typing import Optional
from datetime import datetime


class ReportCreate(BaseModel):
    project_id: int
    report_type: Optional[str] = "progress"
    content: str


class ReportResponse(BaseModel):
    report_id: int
    project_id: int
    mentor_user_id: int
    report_type: Optional[str]
    content: str
    created_at: datetime

    class Config:
        from_attributes = True
