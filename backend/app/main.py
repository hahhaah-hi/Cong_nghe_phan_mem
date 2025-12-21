from fastapi import FastAPI
from app import models
from app.database import engine
app = FastAPI()


models.Base.metadata.create_all(bind=engine)



@app.get('/')
def index():
    return {"message": "Welcome to the API"}

@app.post('/users/')
def create_user():
    return {"message": "User created"}
