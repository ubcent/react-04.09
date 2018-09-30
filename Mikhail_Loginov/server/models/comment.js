const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const {Schema} = mongoose;

const commentSchema = new Schema({
  id: {type: String, required: true},
  postId: {type: String, required: true},
  authorId: {type: String, required: true},
  text: {type: String, required: true}
});

module.exports = mongoose.model('Comment', commentSchema);
