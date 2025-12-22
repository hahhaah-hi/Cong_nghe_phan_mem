# schemas/report.py
from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class ReportCreate(BaseModel):
    project_id: int
    report_type: Optional[str]
    content: Optional[str]


class ReportResponse(BaseModel):
    report_id: int
    created_at: datetime

    class Config:
        from_attributes = True
