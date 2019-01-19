const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const commentsSchema = new Schema({
    body: {
        type: String,
        required: true,
    },
    author: {
        type: ObjectId,
        required: true,
    },
    date: {
        type: Date,
        required:true,
    },
    postParrent:{
        type: ObjectId,
        required: true,
    },
});

module.exports = mongoose.model('Comment', commentsSchema);