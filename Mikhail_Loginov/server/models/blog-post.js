const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  authorId: {
    type: Schema.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Blog-post', blogPostSchema);
