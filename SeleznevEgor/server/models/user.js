const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
    },
    userpic: String,
    posts: {
        type: Array,
        default: [],
    },
    comments: {
        type: Array,
        default:[],
    },
});

module.exports = mongoose.model('User', userSchema);