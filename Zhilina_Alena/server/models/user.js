const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    gender: { type: String, default:'userGender', required: true},
    firstName: { type: String, default:'UserFirstName', required: true},
    lastName: { type: String, default:'UserLastName', required: true},
    email: { type: String, default:'mail@example.com', required: true},
});

module.exports = mongoose.model('User', userSchema, 'users');