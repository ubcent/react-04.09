module.exports = {
  async up(db) {
    await db.createCollection('users');
    await db.collection('users').insertMany([{
      id: '1',
      firstName: 'John',
      lastName: 'Doe'
    }, {
      id: '2',
      firstName: 'Ivan',
      lastName: 'Ivanov'
    }, {
      id: '3',
      firstName: 'Vasya',
      lastName: 'Pupkin'
    }, {
      id: '4',
      firstName: 'Petya',
      lastName: 'Petrov'
    }, {
      id: '5',
      firstName: 'Troll',
      lastName: 'Lvl100'
    }, {
      id: '6',
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
