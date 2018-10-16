const express = require('express');
const router = express.Router();

const { BlogPost } = require('../models');

// @route GET /blog-posts
// @desc  Get All blogPosts
// @access  Public
router.get('/', async (req, res) => {
  const blogPosts = await BlogPost.find();
  res.json(blogPosts);
});

module.exports = router;
