const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const { Comment } = require('../models');

// @route GET /comments
// @desc  Get All Comments
// @access  Public
router.get('/', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

router.post('/', async (req, res) => {
  const comment = req.body;
  comment.authorId = new mongoose.Types.ObjectId('5bb0ac63be662302c80f8412'); // hardcoded user id
  await Comment.create(comment, (err, com) => {
    if (err) {
      console.log(err);
      res.status(403).json({ success: false });
    } else {
      res.json(com);
    }
  });
});

router.put('/', async (req, res) => {
  const comment = req.body;
  await Comment.findByIdAndUpdate(comment._id, { text: comment.text }, err => {
    if (err) {
      console.log(err);
      res.status(404).json({ success: false });
    } else {
      res.status(200).json({ success: true });
    }
  });
})

router.delete('/', async (req, res) => {
  await Comment.deleteOne({ _id: req.body.id }, err => {
    if (err) {
      console.log(err);
      res.status(404).json({ success: false });
    } else {
      res.status(200).json({ success: true });
    }
  });
});

module.exports = router;
