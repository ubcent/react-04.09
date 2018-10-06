const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const db = require('./database');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

db.init();

server.listen(3000, () => {
  console.log('Server has been started');
});

io.on('connection', (socket) => {
  socket.on('message', async (message) => {
    await db.saveUserMessage(message);
    socket.emit('message', message.message);
  });
  socket.on('userMessages', async (id) => {
    const messages = await db.getUserMessagesByCompanionId(id);
    socket.emit('userMessages', messages);
  });
  socket.on('companionData', async (id) => {
    socket.emit('companionData', await db.getCompanionData(id));
  });
  socket.on('companions', async () => {
    socket.emit('companions', await db.getCompanions())
  });
});
