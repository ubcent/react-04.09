const ObjectId = require('mongodb').ObjectId;

module.exports = {
  async up(db) {
    await db.createCollection('comments');
    await db.collection('comments').insertMany([{
      postId: new ObjectId('5bb0ac63be662302c80f841f'),
      authorId: new ObjectId('5bb0ac63be662302c80f8416'),
      text: 'Cool!',
      timestamp: new Date('2018-10-06T18:38:10.635Z'),
    }, {
      postId: new ObjectId('5bb0ac63be662302c80f8420'),
      authorId: new ObjectId('5bb0ac63be662302c80f8413'),
      text: 'Good post',
      timestamp: new Date('2018-10-06T19:38:10.635Z'),
    }, {
      postId: new ObjectId('5bb0ac63be662302c80f8421'),
      authorId: new ObjectId('5bb0ac63be662302c80f8412'),
      text: 'Thanks',
      timestamp: new Date('2018-10-06T20:38:10.635Z'),
    }, {
      postId: new ObjectId('5bb0ac63be662302c80f8420'),
      authorId: new ObjectId('5bb0ac63be662302c80f8416'),
      text: 'Well done',
      timestamp: new Date('2018-10-06T21:38:10.635Z'),
    }, {
      postId: new ObjectId('5bb0ac63be662302c80f841f'),
      authorId: new ObjectId('5bb0ac63be662302c80f8416'),
      text: 'Nothing new.',
      timestamp: new Date('2018-10-06T22:38:10.635Z'),
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