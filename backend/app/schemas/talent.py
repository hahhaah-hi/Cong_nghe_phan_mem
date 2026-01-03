# schemas/talent.py
from pydantic import BaseModel
from typing import Optional

class TalentBase(BaseModel):
    major: Optional[str]
    skills: Optional[str]
    certifications: Optional[str]
    portfolio_url: Optional[str]


class TalentUpdate(TalentBase):
    student_code: str


class TalentResponse(TalentBase):
    user_id: int
    student_code: Optional[str]
    
    class Config:
        from_attributes = True
