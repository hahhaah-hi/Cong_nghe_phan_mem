# schemas/mentor.py
from pydantic import BaseModel
from typing import Optional

class MentorBase(BaseModel):
    expertise: Optional[str]
    years_experience: Optional[int]
    status: Optional[str]

class MentorResponse(MentorBase):
    user_id: int

    class Config:
        from_attributes = True
