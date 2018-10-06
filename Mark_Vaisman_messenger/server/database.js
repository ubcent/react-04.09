const mongoose = require('mongoose');
const {Companion, Message, State, UserMessage} = require('./models');

mongoose.connect('mongodb://localhost/mark_vaisman_messenger', {useNewUrlParser: true});

module.exports = class db {
  
  static async init() {
    if (!await Companion.find().countDocuments()) {
      await Companion.insertMany(data.companions);
    }
    if (!await Message.find().countDocuments()) {
      await Message.insertMany(data.messages);
    }
    if (!await State.find().countDocuments()) {
      await State.insertMany(data.state);
    }
  }
  
  static async getCompanionData(id) {
    let currentId = id
    if (!currentId) {
      const state = await State.find();
      currentId = state[0].lastCompanionId;
    }
    const [info] = await Companion.find({'companionId': currentId});
    const messages = await Message.find({'companionId': currentId});
    return {
      info: info,
      messages: messages.reduce((accumulator, item) => accumulator + item.message + '\n\n', ''),
    };
  }
  
  static async getCompanions() {
    return await Companion.find();
  }
  
  static async saveUserMessage(message) {
    let userMessage = new UserMessage(message);
    await userMessage.save();
  }
  
  static async getUserMessagesByCompanionId(id) {
    let currentId = id
    if (!currentId) {
      const state = await State.find();
      currentId = state[0].lastCompanionId;
    }
    const messages = await UserMessage.find({'companionId': currentId});
    return {messages: messages.reduce((accumulator, item) => accumulator + item.message + '\n\n', '')};
  }
};

// Данные для инициализации MongoDB
const data = {
  'companions': [
    {
      'companionId': 1,
      'name': 'Илья Муромец',
      'status': 'Off-line'
    },
    {
      'companionId': 2,
      'name': 'Добрыня Никитич',
      'status': 'On-line'
    },
    {
      'companionId': 3,
      'name': 'Алеша Попович',
      'status': 'On-line'
    }
  ],
  'messages': [
    {
      'message': 'Praesent in mauris eu tortor porttitor accumsan. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Maecenas aliquet accumsan leo.',
      'companionId': 1
    },
    {
      'message': 'Nullam sit amet magna in magna gravida vehicula. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.',
      'companionId': 2
    },
    {
      'message': 'Etiam posuere lacus quis dolor. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.',
      'companionId': 3
    },
    {
      'message': 'Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. In dapibus augue non sapien.',
      'companionId': 1
    },
    {
      'message': 'Aliquam in lorem sit amet leo accumsan lacinia. Integer lacinia. Etiam neque. Quisque tincidunt scelerisque libero.',
      'companionId': 2
    },
    {
      'message': 'Praesent in mauris eu tortor porttitor accumsan. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Maecenas aliquet accumsan leo.',
      'companionId': 3
    },
    {
      'message': 'Nullam sit amet magna in magna gravida vehicula. Etiam ligula pede, sagittis quis, interdum ultricies, scelerisque eu.',
      'companionId': 1
    },
    {
      'message': 'Etiam posuere lacus quis dolor. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus.',
      'companionId': 2
    },
    {
      'message': 'Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. In dapibus augue non sapien.',
      'companionId': 3
    },
    {
      'message': 'Aliquam in lorem sit amet leo accumsan lacinia. Integer lacinia. Etiam neque. Quisque tincidunt scelerisque libero.',
      'companionId': 1
    },
    {
      'message': 'Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero. In dapibus augue non sapien.',
      'companionId': 2
    },
    {
      'message': 'Aliquam in lorem sit amet leo accumsan lacinia. Integer lacinia. Etiam neque. Quisque tincidunt scelerisque libero.',
      'companionId': 3
    }
  ],
  'state': {
    'lastCompanionId': 2,
    'status': 'On-line'
  }
};
