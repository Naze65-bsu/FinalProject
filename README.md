# Finals_ASIA

## 📘 Blog Post REST API

A secure and lightweight REST API for managing blog posts, built using **Node.js**, **Express**, and **MySQL**. It supports full **CRUD**, JWT-based authentication, rate limiting, and is properly structured for scalability.

---

## ✅ Features

- 🔒 User Registration & Login with JWT Authentication
- ✍️ Create, Read, Update, Delete Blog Posts
- 🔐 Protected Routes (Only logged-in users can post, update, delete)
- 🔄 Sequelize ORM for database interaction
- 🛡️ Rate Limiting
- 🧪 Postman support for manual API testing

---

## 🛠️ Tech Stack

- Node.js + Express
- MySQL (via XAMPP)
- Sequelize (ORM)
- JWT (jsonwebtoken)
- CORS, express-rate-limit
- Dotenv for environment management

---

## 🔧 Prerequisites

Ensure the following tools are installed:

| Tool    | Purpose               | Download                                 |
| ------- | --------------------- | ---------------------------------------- |
| VS Code | Code editor           | https://code.visualstudio.com/           |
| Node.js | JavaScript runtime    | https://nodejs.org/                      |
| XAMPP   | MySQL & Apache Server | https://www.apachefriends.org/index.html |
| Postman | API Testing           | https://www.postman.com/downloads/       |
| Git     | Version control       | https://git-scm.com/                     |

---

## 📁 Folder Structure

```
Finals_ASIA/
├── config/
│ └── db.js
├── controllers/
│ ├── postController.js
│ └── authController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ ├── post.js
│ └── user.js
├── routes/
│ ├── posts.js
│ └── auth.js
├── .env
├── .gitignore
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Start MySQL with XAMPP

- Open **XAMPP Control Panel**
- Start **Apache** and **MySQL**
- Visit: http://localhost/phpmyadmin
- Create a new database:

```sql
**CREATE DATABASE blog_db;**
```

### 2. Create .env File

In the root of the project, create a file named .env and paste the following:
env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=blog_db
DB_DIALECT=mysql
JWT_SECRET=your_super_secret_key

### 3. Install Dependencies

npm install

### 4. Run the Server

node server.js
Visit: http://localhost:3000

## 🚀 API Testing (Postman)

### 🔐 Register

Method: POST

URL: http://localhost:3000/auth/register

Body (JSON):
{
"username": "yourusername",
"password": "yourpassword"
}

### 🔑 Login

Method: POST

URL: http://localhost:3000/auth/login

Body (JSON):

{
"username": "yourusername",
"password": "yourpassword"
}
Response Example:

{
"token": "your.jwt.token.here"
}
Copy the token for future requests.

### 📝 Create Blog Post

Method: POST

URL: http://localhost:3000/posts

Authorization: Bearer Token (paste your JWT)

Body (JSON):

{
"title": "The blog 2025",
"content": "Here is the content",
"author": "JUANITO"
}

### 🛠️ Update Blog Post

Method: PUT

URL: http://localhost:3000/posts/{id}

Authorization: Bearer Token

Body (JSON):

{
"title": "Updated blog title",
"content": "Updated content",
"author": "JUANITO"
}

### 📖 Get All Blog Posts

Method: GET

URL: http://localhost:3000/posts

### 📄 Get Specific Blog Post

Method: GET

URL: http://localhost:3000/posts/{id}

### 🗑️ Delete Blog Post

Method: DELETE

URL: http://localhost:3000/posts/{id}

Authorization: Bearer Token
