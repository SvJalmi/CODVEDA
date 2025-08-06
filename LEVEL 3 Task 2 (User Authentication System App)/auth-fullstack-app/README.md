![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
# Auth Fullstack App


## Overview
This project is a full-stack user authentication system built with Node.js, Express, MongoDB, and a modern, animated frontend using HTML, CSS, and JavaScript. It allows users to register, log in, and access protected routes using JWT (JSON Web Tokens) for session management.

## Features
- User registration and login functionality
- Password hashing for security
- JWT-based authentication for protected routes
- **Modern glassmorphism UI with gradients and blur**
- **Animated transitions between forms**
- **Button hover effects and glowing input fields**
- **Responsive design for all devices**
- **Success/error toast notifications**
- **Loading spinner for backend requests**
- **Password strength meter**
- **Dark/Light mode toggle**
- **Animated reveal for protected content**

## Technologies Used
- **Backend**: Node.js, Express, MongoDB, Mongoose, bcryptjs, jsonwebtoken, cors
- **Frontend**: HTML, CSS (advanced effects), JavaScript

## Folder Structure
```
auth-fullstack-app
├── backend
│   ├── server.js
│   ├── models
│   │   └── User.js
│   ├── routes
│   │   └── auth.js
│   └── middleware
│       └── authMiddleware.js
├── frontend
│   ├── index.html
│   ├── script.js
│   └── styles
│       └── style.css
├── package.json
├── .env
└── README.md
```

## Setup Instructions

### Backend
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install the required dependencies:
   ```
   npm install
   ```
3. Create a `.env` file in the `backend` directory and add your MongoDB connection string and JWT secret:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```
   node server.js
   ```

### Frontend
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Open `index.html` in your web browser to access the application.

## Usage
- **Register**: Fill in the registration form with a username, email, and password. See password strength as you type.
- **Login**: Use your registered email and password to log in. Enjoy animated feedback and notifications.
- **Protected Route**: After logging in, access protected content with animated reveal.
- **Switch Theme**: Toggle between dark and light mode for a personalized experience.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License
This project is open-source and available under the MIT License.
