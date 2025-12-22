# schemas/project_team.py
from pydantic import BaseModel
from datetime import date

class ProjectTeamCreate(BaseModel):
    project_id: int
    talent_user_id: int
    is_leader: bool = False


class ProjectTeamResponse(BaseModel):
    project_id: int
    talent_user_id: int
    is_leader: bool
    joined_at: date
    status: str

    class Config:
        from_attributes = True
