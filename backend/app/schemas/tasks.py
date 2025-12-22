# schemas/task.py
from pydantic import BaseModel
from datetime import date, datetime
from typing import Optional

class TaskCreate(BaseModel):
    project_id: int
    assigned_to: int
    title: str
    description: Optional[str]
    deadline: Optional[date]


class TaskResponse(BaseModel):
    task_id: int
    status: str
    created_at: datetime
    completed_at: Optional[datetime]

    class Config:
        from_attributes = True
