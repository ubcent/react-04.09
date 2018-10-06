const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
  lastCompanionId: {type: Number},
  status: {type: String},
});

module.exports = mongoose.model('State', stateSchema);
