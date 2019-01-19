const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength:3,
        maxlength:50,
    },
    author: {
        type: ObjectId,
        required: true,
    },
    prevText:{
        type: String,
        required:true,
    },
    prevImg:{
        type: String,
        required:true,
    },
    date: {
        type: Date,
        required:true,
    },
    comments:{
        type: Array,
        default:[],
    },
    body: {
        type: [String],
        required: true,
    },
    category: {
        type: ObjectId,
        required:true,
    }
});

module.exports = mongoose.model('Post', postSchema);