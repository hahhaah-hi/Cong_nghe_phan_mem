from pydantic import BaseModel, Field
from typing import Optional

class Userbase (BaseModel):
    user_id: str = Field(min_length=12, max_length=12)
    user_name: str
    email: str 
    full_name: Optional[str] = None
    phone_number: Optional[str] = None
    role: Optional[str] = None
    avatar_url: Optional[str] = None

class User_create (Userbase):
    password: str

class User_response (Userbase):
    created_at: Optional[str] = None
    updated_at: Optional[str] = None

class Config:
    orm_mode = True