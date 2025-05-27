require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require("./routes/blogroutes");

const app = express();
app.use(express.json());

app.use("/api/posts", postRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log('Connected to MongoDB');
  app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
})
.catch(err => console.error('MongoDB connection error:', err));
