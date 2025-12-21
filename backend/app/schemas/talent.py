from pydantic import BaseModel, Field
from typing import Optional

class TalentBase(BaseModel):
    talent_id: str = Field(min_length=12, max_length=12)
    first_name: str
    last_name: str
    email: Optional[str] = None
    phone_number: Optional[str] = None
    portfolio_url: Optional[str] = None
class TalentCreate(TalentBase):
    pass
class TalentResponse(TalentBase):
    talent_id: str
    class Config:
        orm_mode = True