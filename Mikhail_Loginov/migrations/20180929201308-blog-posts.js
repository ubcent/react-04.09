module.exports = {
  async up(db) {
    await db.createCollection('blog-posts');
    await db.collection('blog-posts').insertMany([{
      id: '1',
      title: 'Man must explore, and this is exploration at its greatest ',
      shortDescription: 'Problems look mighty small from 150 miles up',
      authorId: '6',
      date: 'September 24, 2018',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In itaque mollitia numquam? Rerum odit ad perferendis corrupti omnis illum incidunt, nihil dicta fugit beatae molestiae libero quis fuga quo odio possimus impedit praesentium sed fugiat exercitationem natus qui aut expedita voluptatibus! Vel perferendis cum, fuga impedit neque qui laudantium dolores asperiores debitis autem voluptatum minus nostrum dignissimos quo a nesciunt, suscipit voluptas vitae! Veritatis doloremque dolorem tempore aut iure optio consequuntur blanditiis nisi? Illo sequi consectetur provident eaque! Assumenda saepe sapiente placeat ullam nostrum veritatis vero quam molestiae. Deserunt magni exercitationem officiis quisquam harum beatae consequuntur atque blanditiis sit ad?',
    }, {
      id: '2',
      title: 'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine. ',
      shortDescription: '',
      authorId: '1',
      date: 'September 18, 2018',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In itaque mollitia numquam? Rerum odit ad perferendis corrupti omnis illum incidunt, nihil dicta fugit beatae molestiae libero quis fuga quo odio possimus impedit praesentium sed fugiat exercitationem natus qui aut expedita voluptatibus! Vel perferendis cum, fuga impedit neque qui laudantium dolores asperiores debitis autem voluptatum minus nostrum dignissimos quo a nesciunt, suscipit voluptas vitae! Veritatis doloremque dolorem tempore aut iure optio consequuntur blanditiis nisi? Illo sequi consectetur provident eaque! Assumenda saepe sapiente placeat ullam nostrum veritatis vero quam molestiae. Deserunt magni exercitationem officiis quisquam harum beatae consequuntur atque blanditiis sit ad?',
    }, {
      id: '3',
      title: 'Science has not yet mastered prophecy',
      shortDescription: 'We predict too much for the next year and yet far too little for the next ten.',
      authorId: '2',
      date: 'August 24, 2018',
      text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In itaque mollitia numquam? Rerum odit ad perferendis corrupti omnis illum incidunt, nihil dicta fugit beatae molestiae libero quis fuga quo odio possimus impedit praesentium sed fugiat exercitationem natus qui aut expedita voluptatibus! Vel perferendis cum, fuga impedit neque qui laudantium dolores asperiores debitis autem voluptatum minus nostrum dignissimos quo a nesciunt, suscipit voluptas vitae! Veritatis doloremque dolorem tempore aut iure optio consequuntur blanditiis nisi? Illo sequi consectetur provident eaque! Assumenda saepe sapiente placeat ullam nostrum veritatis vero quam molestiae. Deserunt magni exercitationem officiis quisquam harum beatae consequuntur atque blanditiis sit ad?',
    }, {
      id: '4',
      title: 'Failure is not an option',
      shortDescription: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
      authorId: '3',
      date: 'July 8, 2018',
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