const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companionSchema = new Schema({
  companionId: {type: Number},
  name: {type: String},
  status: {type: String}
});

module.exports = mongoose.model('Companion', companionSchema);
