# schemas/user.py
from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class UserBase(BaseModel):
    user_name: str
    full_name: Optional[str] = None
    phone_number: Optional[str] = None


class UserCreate(UserBase):
    password: str   # client gửi password thường


class UserUpdate(BaseModel):
    full_name: Optional[str]
    phone_number: Optional[str]
    password : Optional[str]


class UserResponse(UserBase):
    user_id: int
    created_at: datetime

    class Config:
        from_attributes = True
