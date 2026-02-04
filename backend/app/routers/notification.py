from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.models.notification import Notification
from app.schemas.notification import NotificationCreate, NotificationResponse
from app.oauth2 import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/notifications",
    tags=["Notifications"]
)

# 🔹 Create notification (system / admin dùng)
@router.post("/", response_model=NotificationResponse)
def create_notification(
    request: NotificationCreate,
    db: Session = Depends(get_db)
):
    notification = Notification(
        user_id=request.user_id,
        title=request.title,
        content=request.content
    )
    db.add(notification)
    db.commit()
    db.refresh(notification)
    return notification


# 🔹 Get all notifications of current user
@router.get("/", response_model=List[NotificationResponse])
def get_my_notifications(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return db.query(Notification)\
        .filter(Notification.user_id == current_user.user_id)\
        .order_by(Notification.created_at.desc())\
        .all()


# 🔹 Mark notification as read
@router.put("/{notification_id}/read")
def mark_as_read(
    notification_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    notification = db.query(Notification).filter(
        Notification.notification_id == notification_id,
        Notification.user_id == current_user.user_id
    ).first()

    if not notification:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Notification not found"
        )

    notification.is_read = True
    db.commit()
    return {"message": "Notification marked as read"}
