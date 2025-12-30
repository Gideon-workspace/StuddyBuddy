from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware # 1. Import CORS
import joblib
import numpy as np

app = FastAPI()

# 2. Add CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, change "*" to ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("student_classification_model.pkl")

class Student(BaseModel):
    exam_score: float
    attendance_percentage: float

@app.post("/predict")
def predict(student: Student):
    # Prepare input for scikit-learn
    X = np.array([[student.exam_score, student.attendance_percentage]])
    
    # Make prediction
    prediction = model.predict(X)
    
    # 3. Fix: Extract the actual value from the array and return the right key
    # Most models return an array like [1] or ["Standard"]. 
    # [0] gets the first element.
    result = prediction[0] 

    # If result is a numpy type, convert it to a standard Python type
    if isinstance(result, (np.generic, np.ndarray)):
        result = result.item()

    return {"classify": result} # Matching React's { classify }