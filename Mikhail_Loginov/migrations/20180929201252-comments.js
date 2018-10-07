module.exports = {
  async up(db) {
    await db.createCollection('comments');
    await db.collection('comments').insertMany([{
      id: '1',
      authorId: '5',
      postId: '1',
      text: 'Cool!',
      timestamp: '2018-10-06T18:38:10.635Z',
    }, {
      id: '2',
      postId: '2',
      authorId: '2',
      text: 'Good post',
      timestamp: '2018-10-06T19:38:10.635Z',
    }, {
      id: '3',
      postId: '3',
      authorId: '1',
      text: 'Thanks',
      timestamp: '2018-10-06T20:38:10.635Z',
    }, {
      id: '4',
      postId: '2',
      authorId: '5',
      text: 'Well done',
      timestamp: '2018-10-06T21:38:10.635Z',
    }, {
      id: '5',
      postId: '1',
      authorId: '5',
      text: 'Nothing new.',
      timestamp: '2018-10-06T22:38:10.635Z',
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