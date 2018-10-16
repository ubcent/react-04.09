const express = require('express');
const router = express.Router();

const { User } = require('../models');

// @route GET /users
// @desc  Get All Users
// @access  Public
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
