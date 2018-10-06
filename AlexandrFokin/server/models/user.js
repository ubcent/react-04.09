const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    default: 'Ivan',
    required: true,
  }
});

module.exports = mongoose.model('User', userSchema);