# Personal Finance Tracker

## Overview

The **Personal Finance Tracker** is a MERN (MongoDB, Express.js, React, Node.js) stack application that allows users to manage and track their personal finances. Users can add their expenses and analyze their spending habits through various insights, such as tracking the most used payment methods and categorizing expenses.

## Features

- Add and manage personal expenses
- Categorize transactions
- Track spending patterns
- View insights on payment methods and spending habits

## Project Structure

```
root/
│── backend/      # Backend (Node.js, Express, MongoDB)
│── client/       # Frontend (React)
│── README.md     # Project documentation
```

## Technologies Used

### Frontend (Client)

- React.js
- React Router
- Axios (for API requests)
- Chart.js (for data visualization) (future)
- TailwindCSS (for styling)
- Vite (frontend bulding)

### Backend (Server)

- Node.js
- Express.js
- MongoDB (Mongoose for ORM)

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB
- npm or yarn

### Steps to Run the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/navneetnair7/FinTrack.git
   cd Fintrack
   ```
2. Install dependencies for both frontend and backend:
   ```bash
   cd backend
   npm install
   cd ../client
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the `backend` directory and add your MongoDB connection string.
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
4. Run the backend server:
   ```bash
   cd backend
   node server.js
   ```
5. Run the frontend:
   ```bash
   cd client
   npm run dev
   ```
6. Open the application in your browser at `http://localhost:5173`
