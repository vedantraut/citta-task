# Full Stack Application – Spring Boot & Angular

This repository contains a full-stack application built using **Spring Boot** for the backend and **Angular** for the frontend.

---

## Project Structure

├── Backend
│ └── Citta_Backend
│ ├── src
│ ├── pom.xml
│ └── mvnw
│
├── Frontend
│ └── citta_frontend
│ ├── src
│ ├── angular.json
│ └── package.json
│
└── README.md


## Backend (Spring Boot)

### Prerequisites
- Java 17+
- Maven (or Maven Wrapper)

### Run Backend
```bash
cd Backend/Citta_Backend
```
./mvnw spring-boot:run

The backend runs on:

http://localhost:8080

Example API
GET /api/interviews?page=0&size=10&sort=createdAt,desc

Frontend (Angular)
Prerequisites

Node.js 18+

## Angular CLI

Install and Run
cd Frontend/citta_frontend
npm install
ng serve


## The frontend runs on:

http://localhost:4200

## Integration Details

Frontend consumes REST APIs exposed by Spring Boot

Server-side pagination and sorting implemented in the backend

CORS configured in the backend for frontend access

## Git Hygiene

Build artifacts and IDE-specific files are excluded using .gitignore

The repository contains only the source code and the configuration required to run the project

## Deployment

Frontend: (Netlify) – https://citta-ai-task-1.netlify.app/users

Backend: (Render) – https://citta-task-1.onrender.com/
