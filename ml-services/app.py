from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np


app = FastAPI()

model = joblib.load("student_classification_model.pkl")

# Define expected input using Pydantic
class Student(BaseModel):
    exam_score: float
    attendance_percentage: float


@app.post("/predict")
def predict(student: Student):
  
    X = np.array([[student.exam_score, student.attendance_percentage]])
    prediction = model.predict(X)
    return {"prediction": prediction.tolist()}
