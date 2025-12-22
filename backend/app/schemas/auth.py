# schemas/auth.py
from pydantic import BaseModel

class LoginRequest(BaseModel):
    user_name: str
    password: str


class LoginResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
