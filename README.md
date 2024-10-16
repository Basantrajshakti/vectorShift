# React Flow Pipeline Project

This project is a React application that allows users to create and manage a pipeline using a flow-based interface. It integrates with a FastAPI backend to process the pipeline and provides professional styling using Tailwind CSS.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Project Structure

```
project-root/
├── backend/
│ ├── main.py # FastAPI backend entry point
├── frontend/
│ ├── src/
│ └─├── App.jsx # Main application component
│   ├── index.js # Entry point for React app
│   ├── index.css
│   ├── store.jsx
│   ├── nodes/ # Contains reusable components for nodes
│   │ ├── BaseNode.jsx
│   │ ├── CustomNodes.jsx
│   │ ├── TextNode.jsx
│   │ ├── InputNode.jsx
│   │ ├── LLMNode.jsx
│   │ └── OutputNode.jsx
│   ├── DraggableNode.jsx
│   ├── Toolbar.jsx
│   ├── UI.jsx
│   └── Submit.jsx # Handles form submission and integration with backend
├── package.json # Project dependencies and scripts
├── package-lock.json
├── tailwind.config.js
└── README.md # Project documentation
```

## Features

- **Dynamic Node Creation**: Users can create various types of nodes (Text, Input, Output) that can be connected to form a pipeline.
- **Real-time Handle Generation**: The TextNode generates input handles based on user-defined variables.
- **Backend Integration**: The frontend communicates with a FastAPI backend to process and validate the created pipelines.
- **DAG Validation**: The backend checks whether the created pipeline forms a directed acyclic graph (DAG).
- **Professional Styling**: The application uses Tailwind CSS for a modern and responsive design.

## Technologies Used

- **Frontend**: React, ReactFlow and Tailwind CSS
- **Backend**: FastAPI and pydantic
- **State Management**: React Hooks and Zustand
- **Node Handling**: React Flow

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project-root
   ```
2. Install the backend dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
3. Install the frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

## Usage

1. Run the Backend: Navigate to the backend directory and run the FastAPI server:
   ```bash
   cd backend
   uvicorn main:app --reload
   ```
2. Run the Frontend: Navigate to the frontend directory and start the React app:
   ```bash
   cd frontend
   npm start
   ```
3. Open your browser and navigate to http://localhost:3000 to use the application.
