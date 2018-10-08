const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  companionId: {type: Number},
  message: {type: String},
});

module.exports = mongoose.model('Message', messageSchema);
