const express = require('express');
const router = express.Router();
const { createPost, getPost, getPostById, updatedPost, deletedPost} = require("../controllers/blogControllers")

router.post("/", createPost);

router.get("/", getPost);

router.get("/:id", getPostById);

router.put("/:id", updatedPost);

router.delete("/:id", deletedPost)

module.exports = router;
