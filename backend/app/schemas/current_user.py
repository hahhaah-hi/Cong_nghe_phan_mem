from pydantic import BaseModel
from typing import List

class CurrentUser(BaseModel):
    user_name: str
    roles: List[str]

    class Config:
        from_attributes = True
