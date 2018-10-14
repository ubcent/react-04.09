const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  postId: {
    type: Schema.ObjectId,
    required: true,
  },
  authorId: {
    type: Schema.ObjectId,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Comment', commentSchema);
