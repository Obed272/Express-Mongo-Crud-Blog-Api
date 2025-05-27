# 📝 Blog Post CRUD API

This is a simple CRUD API for managing blog posts using **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**.  
It supports the following operations:

- Create a new blog post
- Fetch all blog posts
- Fetch a single blog post by ID
- Update a blog post by ID
- Delete a blog post by ID

---

## 🛠 Tech Stack

- **Backend Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Testing Tool**: Insomnia

---

## 🚀 Setup Instructions

### 1. Clone the repository:

```bash
git clone https://github.com/Obed272/express-mongo-crud-blog-api.git
cd express-mongo-crud-blog-api
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Create a `.env` file and add the following:

```env
PORT=3000
MONGODB_URI="Your MongoDB URI"
```

> Replace `"Your MongoDB URI"` with your actual MongoDB connection string.

### 4. Start the server:

```bash
npm start
```

---

## 📮 API Endpoints

### ➕ Create a Post
- **POST** `/api/posts`
- **Body** (JSON):
  ```json
  {
    "title": "My First Post",
    "content": "This is the content of the post.",
    "author": "Jane Doe"
  }
  ```

### 📥 Get All Posts
- **GET** `/api/posts`

### 📄 Get Single Post by ID
- **GET** `/api/posts/:id`

### ✏️ Update Post by ID
- **PUT** `/api/posts/:id`
- **Body** (JSON):
  ```json
  {
    "title": "Updated Title",
    "content": "Updated content.",
    "author": "Jane Doe"
  }
  ```

### ❌ Delete Post by ID
- **DELETE** `/api/posts/:id`

---

## 🧪 Testing with Insomnia

1. Open **Insomnia**
2. Create a new request collection (e.g., `Blog API`)
3. Add the above routes as requests
4. For `POST` and `PUT`, select **Body → JSON** and enter the sample data
5. Make sure your server is running and MongoDB is connected

---

## 📂 Project Structure

```
.
├── controllers/
│   └── postController.js
├── models/
│   └── Post.js
├── routes/
│   └── blogRoutes.js
├── .env
├── server.js
├── package.json
└── README.md
```
## 🧑‍💻 Author

Made by [Nwadinobi Obed]
