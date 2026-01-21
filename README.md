# Web Online Bookshop

This is a full-stack Online Bookshop web application built using **React (Vite)** for the frontend and **JSON Server** for the backend.

The project demonstrates how a modern React application consumes a REST API to display and manage book-related data.  
This repository contains **source code only** and is intended for learning and academic purposes.

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript (ES6)
- HTML
- CSS

### Backend
- JSON Server

---




## Project Structure

```
WEB-ONLINE-BOOKSHOP
├── backend
│   ├── db.json
│   ├── package.json
│   └── node_modules
│
└── frontend
    └── bookish-frontend
        ├── public
        ├── src
        │   ├── api
        │   ├── components
        │   ├── pages
        │   ├── App.jsx
        │   ├── main.jsx
        │   ├── App.css
        │   └── index.css
        ├── index.html
        ├── package.json
        ├── vite.config.js
        └── node_modules
```

---

## How to Run the Project

### Step 1: Run the Backend

Open a terminal in the backend folder:

cd backend  
npm install  
npx json-server --watch db.json --port 3000  

Backend will run at:
http://localhost:3000

---

### Step 2: Run the Frontend

Open another terminal in the frontend folder:

cd frontend/bookish-frontend  
npm install  
npm run dev  

Frontend will run at:
http://localhost:5173

---

## Features

- Displays books from a mock API
- Uses React components and pages
- Fetches data using REST API calls
- Simple project structure for learning

---

## Purpose

This project was created to practice React development and understand how frontend applications communicate with APIs.

---


## Getting Started

### Clone the Repository
```bash
git clone https://github.com/LaibaMaryam65/web-online-bookshop.git
cd web-online-bookshop
```

### Install Dependencies

Backend:
```bash
cd backend
npm install
```

Frontend:
```bash
cd frontend/bookish-frontend
npm install
```

