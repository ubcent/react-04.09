const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = require('./blog');

const postSchema = new Schema({
    title: { type: String, default:'PostTitle', required: true},
    description: { type: String, default:'PostDescription', required: true},
    text: { type: String, default:'PostText', required: true},
    blog: { type:Schema.Types.ObjectId, ref:'Blog'}
});

module.exports = mongoose.model('Post', postSchema, 'posts');