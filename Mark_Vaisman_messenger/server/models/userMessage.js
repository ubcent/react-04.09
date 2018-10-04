const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userMessageSchema = new Schema({
  companionId: {type: Number},
  message: {type: String},
});

module.exports = mongoose.model('UserMessage', userMessageSchema);
