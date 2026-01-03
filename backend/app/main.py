
from fastapi import FastAPI
from app import models
from app.database import engine
from app.routers import user,authenication,roles,profile,company
app = FastAPI()


models.Base.metadata.create_all(bind=engine)

app.include_router(user.router)
app.include_router(authenication.router)
app.include_router(roles.router)
app.include_router(profile.router)
app.include_router(company.router)