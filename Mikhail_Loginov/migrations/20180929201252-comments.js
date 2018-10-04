module.exports = {
  async up(db) {
    await db.createCollection('comments');
    await db.collection('comments').insertMany([{
      id: '1',
      authorId: '5',
      postId: '1',
      text: 'Cool!',
    }, {
      id: '2',
      postId: '2',
      authorId: '2',
      text: 'Good post'
    }, {
      id: '3',
      postId: '3',
      authorId: '1',
      text: 'Thanks'
    }, {
      id: '4',
      postId: '2',
      authorId: '5',
      text: 'Well done'
    }, {
      id: '5',
      postId: '1',
      authorId: '5',
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