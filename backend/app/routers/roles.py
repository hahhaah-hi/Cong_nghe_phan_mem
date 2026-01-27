from fastapi import APIRouter,Depends, status,  HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.database import get_db
from app.routers import hashing
from app.core.token import create_access_token

router = APIRouter(
    tags=['Roles'])



