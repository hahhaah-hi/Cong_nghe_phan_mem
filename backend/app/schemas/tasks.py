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
    
class TaskUpdate(BaseModel):
    title: Optional[str]
    status: Optional[str]
    assigned_to: Optional[int]
    description: Optional[str]
    completed_at: Optional[datetime]


class TaskResponse(BaseModel):
    task_id: int
    title: str
    project_id: int
    assigned_by:int
    assigned_to: int
    status: str
    description: Optional[str]
    created_at: datetime
    deadline: datetime   
     

    class Config:
        from_attributes = True
