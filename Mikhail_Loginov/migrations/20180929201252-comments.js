module.exports = {
  async up(db) {
    await db.createCollection('comments');
    await db.collection('comments').insertMany([{
      id: 1,
      authorID: 5,
      postID: 1,
      text: 'Cool!',
    }, {
      id: 2,
      postID: 2,
      authorID: 2,
      text: 'Good post'
    }, {
      id: 3,
      postID: 3,
      authorID: 1,
      text: 'Thanks'
    }, {
      id: 4,
      postID: 2,
      authorID: 5,
      text: 'Well done'
    }, {
      id: 5,
      postID: 1,
      authorID: 5,
      text: 'Nothing new.'
    }, ])
  },

  async down(db) {
    try {
      await db.dropCollection('comments')
    } catch (err) {
      throw err
    }
  },
}