from fastapi import FastAPI
from pydantic import BaseModel
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

# Initialize FastAPI app
app = FastAPI()

# Load the trained model and tokenizer
model = AutoModelForCausalLM.from_pretrained("./output_model")
tokenizer = AutoTokenizer.from_pretrained("./output_model")

# Make sure the tokenizer and model pad token is correctly set
tokenizer.pad_token = tokenizer.eos_token
model.config.pad_token_id = tokenizer.eos_token_id

# Define request/response structure
class ChatRequest(BaseModel):
    prompt: str

class ChatResponse(BaseModel):
    response: str

# Define a function to generate a response from the model
def generate_response(prompt):
    inputs = tokenizer.encode(prompt + tokenizer.eos_token, return_tensors="pt")
    outputs = model.generate(inputs, max_length=100, pad_token_id=tokenizer.eos_token_id)
    response = tokenizer.decode(outputs[:, inputs.shape[-1]:][0], skip_special_tokens=True)
    return response

# Define a FastAPI route
@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    prompt = request.prompt
    response = generate_response(prompt)
    return ChatResponse(response=response)

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the Chatbot API!"}
