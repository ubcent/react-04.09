const ObjectId = require('mongodb').ObjectId;

module.exports = {
  async up(db) {
    await db.createCollection('users');
    await db.collection('users').insertMany([{
      _id: new ObjectId('5bb0ac63be662302c80f8412'),
      firstName: 'John',
      lastName: 'Doe'
    }, {
      _id: new ObjectId('5bb0ac63be662302c80f8413'),
      firstName: 'Ivan',
      lastName: 'Ivanov'
    }, {
      _id: new ObjectId('5bb0ac63be662302c80f8414'),
      firstName: 'Vasya',
      lastName: 'Pupkin'
    }, {
      _id: new ObjectId('5bb0ac63be662302c80f8415'),
      firstName: 'Petya',
      lastName: 'Petrov'
    }, {
      _id: new ObjectId('5bb0ac63be662302c80f8416'),
      firstName: 'Troll',
      lastName: 'Lvl100'
    }, {
      _id: new ObjectId('5bb0ac63be662302c80f8417'),
      firstName: 'Elon',
      lastName: 'Mask'
    }, ])
  },

  async down(db) {
    try {
      await db.dropCollection('users')
    } catch (err) {
      throw err
    }
  },
}
