# schemas/company.py
from pydantic import BaseModel
from typing import Optional

class CompanyBase(BaseModel):
    company_id:str
    company_name: str
    department: Optional[str] = None
    description: Optional[str] = None
    website: Optional[str] = None


class CompanyCreate(BaseModel):
    company_id:str
    company_name: str
    department: Optional[str] = None
    description: Optional[str] = None
    website: Optional[str] = None


class CompanyResponse(CompanyBase):
    company_id: str
    user_id: int
    verified: bool

    class Config:
        from_attributes = True
