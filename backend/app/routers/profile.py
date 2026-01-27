from fastapi import APIRouter,Depends, status, HTTPException
from sqlalchemy.orm import Session, joinedload
from app import models, schemas
from app.routers import hashing 
from app.database import get_db
from typing import List
from app.core import oauth2

router = APIRouter(
    tags=['Profile']) 





