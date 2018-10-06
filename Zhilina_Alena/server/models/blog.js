const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user');

const blogSchema = new Schema({
    title: { type: String, default:'BlogTitle', required: true},
    description: { type: String, default:'BlogDescription', required: true},
    user: { type:Schema.Types.ObjectId, ref:'User'}
});

module.exports = mongoose.model('Blog', blogSchema, 'blogs');