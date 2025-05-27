const express = require('express');
const Post = require("../models/blogModels")

 const createPost = async (req, res)=>{
    try {
    const post = new Post(req.body);
    const savedPost = await post.save();
    res.status(201).json(savedPost)
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
};

 const getPost = async (req, res)=>{
    try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

 const getPostById = async(req, res)=>{
    try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found"})
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
};

 const updatedPost =  async (res, req)=>{
    try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new : true });
    if (!updatedPost) return res.status(404).json({ message: "Post not found" });
  } catch (error) {
    res.status(400).json({ message: err.message });
  }
}

 const deletedPost = async (req, res)=>{
    try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!updatedPost) return res.status(404).json({ message: "Post not found" });
  } catch (error) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = { createPost, getPost, getPostById, updatedPost, deletedPost }
