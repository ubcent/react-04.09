const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user');
const Post = require('./post');

const commentSchema = new Schema({
    text: { type: String, default:'CommentText', required: true},
    user: { type:Schema.Types.ObjectId, ref:'User'},
    post: { type:Schema.Types.ObjectId, ref:'Post' }
});

module.exports = mongoose.model('Comment', commentSchema, 'comments');