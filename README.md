# Web Online Bookshop
Online bookshop built with React and json-server
This is a simple Online Bookshop web application built using React (Vite) for the frontend and json-server for the backend.

The application fetches book data from a local mock REST API and displays it in the browser.  
This project is meant for learning and practice purposes.

---

## Technologies Used

Frontend:
- React
- Vite
- JavaScript
- HTML
- CSS

Backend:
- json-server

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
