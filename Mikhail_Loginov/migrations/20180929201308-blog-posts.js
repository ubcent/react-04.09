const ObjectId = require('mongodb').ObjectId;

module.exports = {
  async up(db) {
    await db.createCollection('blog-posts');
    await db.collection('blog-posts').insertMany([{
      _id: new ObjectId('5bb0ac63be662302c80f841f'),
      title: 'Man must explore, and this is exploration at its greatest ',
      shortDescription: 'Problems look mighty small from 150 miles up',
      authorId: new ObjectId('5bb0ac63be662302c80f8417'),
      date: new Date('2018-10-07T08:57:37.886Z'),
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In itaque mollitia numquam? Rerum odit ad perferendis corrupti omnis illum incidunt, nihil dicta fugit beatae molestiae libero quis fuga quo odio possimus impedit praesentium sed fugiat exercitationem natus qui aut expedita voluptatibus! Vel perferendis cum, fuga impedit neque qui laudantium dolores asperiores debitis autem voluptatum minus nostrum dignissimos quo a nesciunt, suscipit voluptas vitae! Veritatis doloremque dolorem tempore aut iure optio consequuntur blanditiis nisi? Illo sequi consectetur provident eaque! Assumenda saepe sapiente placeat ullam nostrum veritatis vero quam molestiae. Deserunt magni exercitationem officiis quisquam harum beatae consequuntur atque blanditiis sit ad?',
    }, {
      _id: new ObjectId('5bb0ac63be662302c80f8420'),
      title: 'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine. ',
      shortDescription: '',
      authorId: new ObjectId('5bb0ac63be662302c80f8412'),
      date: new Date('2018-10-07T09:08:03.790Z'),
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In itaque mollitia numquam? Rerum odit ad perferendis corrupti omnis illum incidunt, nihil dicta fugit beatae molestiae libero quis fuga quo odio possimus impedit praesentium sed fugiat exercitationem natus qui aut expedita voluptatibus! Vel perferendis cum, fuga impedit neque qui laudantium dolores asperiores debitis autem voluptatum minus nostrum dignissimos quo a nesciunt, suscipit voluptas vitae! Veritatis doloremque dolorem tempore aut iure optio consequuntur blanditiis nisi? Illo sequi consectetur provident eaque! Assumenda saepe sapiente placeat ullam nostrum veritatis vero quam molestiae. Deserunt magni exercitationem officiis quisquam harum beatae consequuntur atque blanditiis sit ad?',
    }, {
      _id: new ObjectId('5bb0ac63be662302c80f8421'),
      title: 'Science has not yet mastered prophecy',
      shortDescription: 'We predict too much for the next year and yet far too little for the next ten.',
      authorId: new ObjectId('5bb0ac63be662302c80f8413'),
      date: new Date('2018-10-07T09:15:54.492Z'),
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In itaque mollitia numquam? Rerum odit ad perferendis corrupti omnis illum incidunt, nihil dicta fugit beatae molestiae libero quis fuga quo odio possimus impedit praesentium sed fugiat exercitationem natus qui aut expedita voluptatibus! Vel perferendis cum, fuga impedit neque qui laudantium dolores asperiores debitis autem voluptatum minus nostrum dignissimos quo a nesciunt, suscipit voluptas vitae! Veritatis doloremque dolorem tempore aut iure optio consequuntur blanditiis nisi? Illo sequi consectetur provident eaque! Assumenda saepe sapiente placeat ullam nostrum veritatis vero quam molestiae. Deserunt magni exercitationem officiis quisquam harum beatae consequuntur atque blanditiis sit ad?',
    }, {
      _id: new ObjectId('5bb0ac63be662302c80f8422'),
      title: 'Failure is not an option',
      shortDescription: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
      authorId: new ObjectId('5bb0ac63be662302c80f8414'),
      date: new Date('2018-10-13T12:50:21.357Z'),
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In itaque mollitia numquam? Rerum odit ad perferendis corrupti omnis illum incidunt, nihil dicta fugit beatae molestiae libero quis fuga quo odio possimus impedit praesentium sed fugiat exercitationem natus qui aut expedita voluptatibus! Vel perferendis cum, fuga impedit neque qui laudantium dolores asperiores debitis autem voluptatum minus nostrum dignissimos quo a nesciunt, suscipit voluptas vitae! Veritatis doloremque dolorem tempore aut iure optio consequuntur blanditiis nisi? Illo sequi consectetur provident eaque! Assumenda saepe sapiente placeat ullam nostrum veritatis vero quam molestiae. Deserunt magni exercitationem officiis quisquam harum beatae consequuntur atque blanditiis sit ad?',
    }, ])
  },

  async down(db) {
    try {
      await db.dropCollection('blog-posts')
    } catch (err) {
      throw err
    }
  },
}