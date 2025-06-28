# Auth App

A full-stack authentication application built with React frontend and Node.js backend.

## Features

- User registration and login
- JWT-based authentication
- Protected routes
- User profile management
- MongoDB database integration

## Project Structure

```
auth-app/
├── backend/          # Node.js/Express server
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Authentication middleware
│   ├── models/       # MongoDB models
│   ├── routes/       # API routes
│   └── server.js     # Main server file
└── frontend/         # React application
    ├── src/
    │   ├── pages/    # React components
    │   └── store/    # State management
    └── public/       # Static files
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## API Endpoints

- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Package Manager**: npm

## Environment Variables

Make sure to set up the following environment variables in your `.env` file:

- `MONGO_URI`: Your MongoDB connection string
- `JWT_SECRET`: A secure secret key for JWT signing
- `PORT`: Server port (default: 5000)

## Security Notes

- Never commit `.env` files to version control
- Use strong, unique JWT secrets
- Implement proper input validation
- Use HTTPS in production 