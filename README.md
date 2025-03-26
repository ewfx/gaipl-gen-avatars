# 🚀 Project Name

## 📌 Table of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [Inspiration](#inspiration)
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [Challenges We Faced](#challenges-we-faced)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)
- [Team](#team)

---

## 🎯 Introduction
Integrated Platform Environment leverages advanced machine learning models to understand, analyze, and resolve incidents in real time. This technology can improve efficiency, reduce downtime, and provide accurate resolutions to complex problems by utilizing historical data, knowledge bases, and telemetry from various systems..

## 🎥 Demo
🔗 [Live Demo](#) (if applicable)  
📹 [Video Demo](#) (if applicable)  
🖼️ Screenshots:

![Screenshot 1](link-to-image)

## 💡 Inspiration
Below are the problem in current incident management process :

Automating Incident Detection: Monitoring system telemetry and identifying potential issues.

Suggesting Resolutions: Using knowledge bases, historical data, and real-time analysis to propose fixes.

Ticket Management: Automatically generating and managing incident tickets.

Cross-Platform Integration: Seamlessly interacting with existing tools (Jira, Confluence, BigPanda, ServiceNow) to streamline the incident resolution process.

These will be effectively addressed by our solution

## ⚙️ What It Does
It analyzes the system telemetry (such as logs, metrics, and traces) to detect anomalies, understand the nature of incidents, and suggest or automate resolutions. By integrating with tools like Big Panda, Jira, Confluence,  it can generate and manage tickets, ensuring the incident is tracked through its lifecycle

## 🛠️ How We Built It

We used pretrianed model "microsoft/DialoGPT-medium" from Huggingface and trained the model on Incident specific dataset, logs, configuration items

Tools and Technologies Used:
Generative AI Platforms: Hugging Face
Softwares: Python, VS Code, React


## 🚧 Challenges We Faced
Faced challenges with proper data set and data quality, also faced challenges with model training and tuning ,as these process require lot of computing power and our personal laptops does not have this power.

## 🏃 How to Run
1. Clone the repository  
   ```sh
   git clone https://github.com/your-repo.git
   ```
2. Install dependencies  
   ```sh
   npm install  # or pip install -r requirements.txt (for Python)

   pip install fastapi uvicorn
   pip install torch
   pip install transformers
   pip install datasets 
   ```
3. Run the project  
   ```sh
   npm start  # or python app.py
   ```


## 🏗️ Tech Stack
- 🔹 Frontend: React
- 🔹 Backend: FastAPI , Python
- 🔹 Database: PostgreSQL / Firebase
- 🔹 Other: HuggingFace

## 👥 Team
- **Prasad Koduri** - [GitHub](#) | [LinkedIn](#)
- **Sitaram Garlapati** - [GitHub](#) | [LinkedIn](#)
- **Suresh Kadam** - [GitHub](#) | [LinkedIn](#)
- **Ramana Venkata** - [GitHub](#) | [LinkedIn](#)
