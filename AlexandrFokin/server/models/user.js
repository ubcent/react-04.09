const mongoose = require('mongoose');
// подключаем интерфейс Schema для создания модели
const Schema = mongoose.Schema;

// схема объекта User
const userSchema = new Schema({
  // свойство userName
  userName: {
    // тип данных
    type: String,
    // флаг обязательного поля
    required: true,
  },
  // свойство userMail
  userMail: {
    type: String,
    required: true,
  },
  userBirthday: {
    type: Date,
  },
});

// экспорт модели User
module.exports = mongoose.model('User', userSchema);