from pydantic import BaseModel, Field 
from typing import Optional
class CompanyBase(BaseModel):
    company_id: str
    company_name: str
    address: Optional[str] = None
    phone_number: Optional[str] = None
    website: Optional[str] = None
class CompanyCreate(CompanyBase):
    pass
class CompanyResponse(CompanyBase):
    company_id: str
    verified: Optional[bool] = None
    class Config:
        orm_mode = True