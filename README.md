# 🎓 Backend Assignment - Student Management API

A RESTful Student Management System Backend built with **Node.js**, **Express.js**, and **MongoDB**.  
This project provides secure and scalable APIs for managing student records with complete CRUD operations following clean backend architecture.

---

## 📌 Project Objective

The objective of this assignment is to build a backend service that allows:

- Adding new students
- Fetching single student by ID
- Updating student details
- Deleting student records

The API follows REST principles and demonstrates proper use of:

- Express Routing
- MongoDB Database Integration
- Mongoose Schema Modeling
- MVC Folder Structure
- Error Handling
- Environment Variables

---

## 🚀 Tech Stack

- **Backend Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Environment Config:** dotenv
- **Testing Tool:** Postman

---

## 📂 Folder Structure

```bash
Backend-Assignment-Student-Management-API/
│── config/
│   └── db.js
│   └── emailConfig.js
│
│── controllers/
│   └── authController.js
│   └── userController.js
│
│── middlewares/
│   └── errorMiddleware.js
│
│── responseHandler/
│   └── successResponse.js
│
│── services/
│   └── sendEmail.js
│
│── models/
│   └── userModel.js
│
│── routes/
│   └── authRoutes.js
│   └── userRoutes.js
│
│── .env
│── .gitignore
│── server.js
│── package.json
│── README.md
```

This project follows a clean separation of concerns:

- **Config** → Database connection setup
- **Models** → MongoDB schema definitions
- **Controllers** → Business logic
- **Routes** → API endpoints
- **Server.js** → Main application entry point

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/dayyanfahad2010/Backend-Assignment-Student-Management-API.git
cd Backend-Assignment-Student-Management-API
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SCRET_KEY = etc
PORTAL_EMAIL= abc@gmail.com
PORTAL_PASSWORD=abc
```

### 4️⃣ Run Server

```bash
npm run start:dev
```

Server will run on:

```bash
http://localhost:5000
```

---

## 📬 API Endpoints

### ➕ Create Student

```http
POST /api/auth/signup
```

#### Request Body

```json
{
  "firstName": "Ali Khan",(optional)
  "lastName": "Khan",(optional)
  "age": 21,(optional)
  "email": "ali@example.com",(required)
  "password":"abx123"(required)
}
```

---

### 🔍 Get Student By ID

```http
GET /api/students/:id
```

---

### ✏️ Update Student

```http
PUT /api/students/
```

#### Request Body

```json
{
  "firstName": "Ali Updated",
  "lastName": "Ali Updated",
  "age": 16,
}
```

---

### ❌ Delete Student

```http
DELETE /api/students/:id
```

---

## 🧠 Features Implemented

✅ Full CRUD Functionality  
✅ RESTful API Design  
✅ MongoDB Database Connectivity  
✅ Mongoose Data Validation  
✅ Modular MVC Architecture  
✅ Error Handling Middleware  
✅ Clean and Scalable Codebase

Well-designed backend assignments are expected to expose clear CRUD endpoints and maintain modular routing/controller separation for maintainability. :contentReference[oaicite:1]{index=1}

---

## 🧪 API Testing

All endpoints were tested using **Postman**.

You can test:

- Create Student(Signup)
- Login Student
- Verify OTP
- Forgot Password
- Reset Password
- Get Single Student
- Update Student
- Delete Student

---

## 📸 Sample Response

```json
{
  "success": true,
  "message": "Student fetched successfully",
  "data": {
    "_id": "680f1c2f4b6f3d1234567890",
    "name": "Ali Khan",
    "age": 21,
    "email": "ali@example.com"
  }
}
```

---

## 👨‍💻 Author

**Dayyan Fahad**

GitHub: [https://github.com/dayyanfahad2010](https://github.com/dayyanfahad2010)

---

## ⭐ Conclusion

This backend assignment demonstrates the practical implementation of a Student Management REST API using Node.js and MongoDB with industry-standard folder structure and scalable coding practices.

It is a beginner-to-intermediate backend project focused on strengthening API development fundamentals.
