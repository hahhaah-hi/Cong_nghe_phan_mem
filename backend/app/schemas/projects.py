# schemas/project.py
from pydantic import BaseModel
from datetime import date
from typing import Optional

class ProjectBase(BaseModel):
    title: str
    description: Optional[str]
    deadline: Optional[date]


class ProjectCreate(ProjectBase):
    company_id: str
    mentor_user_id: int


class ProjectResponse(ProjectBase):
    project_id: int
    status: str

    class Config:
        from_attributes = True
