# schemas/user.py
from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class UserBase(BaseModel):
    user_name: str
    full_name: Optional[str] = None
    phone_number: Optional[str] = None
    role_name: list[str]
class UserCreate(UserBase):
    password: str   # client gửi password thường
    role_name: list[str]

class UserUpdate(BaseModel):
    full_name: Optional[str]
    phone_number: Optional[str] 
    password: Optional[str]
    updated_at: datetime


class UserResponse(UserBase):
    user_id: int
    role_name: list[str]
    created_at: datetime

    class Config:
        from_attributes = True
