const mongoose = require('mongoose');
//const Schema = mongoose.Schema;
const {Schema} = mongoose;

const blogPostSchema = new Schema({
  id: {type: String, required: true},
  title: {type: String, required: true},
  shortDescription: {type: String, required: true},
  authorId: {type: String, required: true},
  date: {type: String, required: true},
  text: {type: String, required: true}
});

module.exports = mongoose.model('Blog-post', blogPostSchema);
