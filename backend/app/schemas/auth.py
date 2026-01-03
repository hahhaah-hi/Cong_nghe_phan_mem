# schemas/auth.py
from pydantic import BaseModel
from typing import Optional

class LoginRequest(BaseModel):
    user_name: str
    password: str

class LoginResponse(BaseModel):
    user_name:str

class Token(BaseModel):
    access_token:str
    token_type: str

class Token_data(BaseModel):
    user_name: Optional[str] =None
    role_name: list[str]