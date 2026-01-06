# schemas/role.py
from pydantic import BaseModel
from typing import Optional

class RoleBase(BaseModel):
    role_name: list[str]
    description: Optional[str] = None


class RoleResponse(BaseModel):
    role_name: list[str]
    description: Optional[str] = None

    class Config:
        from_attributes = True
