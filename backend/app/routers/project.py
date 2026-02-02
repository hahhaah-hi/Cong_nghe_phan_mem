from fastapi import APIRouter,Depends, status, Response, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas
from app.routers import hashing 
from app.core import oauth2
from app.database import get_db
from typing import List

router=APIRouter(tags=['Project'])


