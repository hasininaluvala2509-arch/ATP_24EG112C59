# BlogApp - Week 07 Capstone Project

A comprehensive Full-Stack MERN (MongoDB, Express, React, Node.js) Blog Application. This project allows users to read blogs, authors to create and manage their content, and administrators to oversee the platform.

##  Features

### Core Functionalities
- **User Authentication**: Secure Login and Registration using JWT (JSON Web Tokens) and bcrypt for password hashing.
- **Role-Based Access Control (RBAC)**: Distinct interfaces and permissions for **Users**, **Authors**, and **Admins**.
- **Article Management**: Authors can write, edit, and soft-delete articles.
- **Image Uploads**: Integration with **Cloudinary** for storing article and profile images.
- **State Management**: Efficient state handling using **Zustand** on the frontend.
- **Responsive Design**: Modern and clean UI built with **Tailwind CSS**.

### User Roles
- **User**: Can browse articles and manage their profile.
- **Author**: Can create, update, and manage their own articles.
- **Admin**: Can view and manage all users and authors on the platform.

---

##  Tech Stack

  React.js
   Vite
    Zustand
    Tailwind CSS

    Express.js
    MongoDB
    Mongoose
    Cloudinary
    JWT
    bcryptjs



---

##  Project Structure

```text
week07Capstone/
├── Backend-BlogApp/         # Express.js Server
│   ├── APIs/                # API Routes (User, Author, Admin, Common)
│   ├── config/              # Configuration files
│   ├── middlewares/         # Custom Middlewares (Token verification, etc.)
│   ├── models/              # Mongoose Schemas
│   ├── server.js            # Entry point
│   └── .env                 # Environment variables
└── Frontend-BlogApp/        # React Application
    ├── src/
    │   ├── components/      # UI Components & Pages
    │   ├── stores/          # Zustand State Stores
    │   ├── assets/          # Static files
    │   └── App.jsx          # Main App component
    └── vite.config.js       # Vite configuration
```

---



### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account or local MongoDB instance
- Cloudinary account for image storage
