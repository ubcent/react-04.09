const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  post: { type: String, ref: 'Post' },
  user: { type: String, ref: 'User' },
  text: { type: String, required: true },
});

module.exports = mongoose.model('Comment', commentSchema);
