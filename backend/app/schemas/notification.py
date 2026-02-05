from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class NotificationCreate(BaseModel):
    user_id: int
    title: str
    content: Optional[str] = None


class NotificationResponse(BaseModel):
    notification_id: int
    title: str
    content: Optional[str]
    is_read: bool
    created_at: datetime

    class Config:
        from_attributes = True
