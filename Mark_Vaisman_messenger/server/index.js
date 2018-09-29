const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const db = require('./database');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(3000, () => {
  console.log('Server has been started');
});

io.on('connection', (socket) => {
  socket.on('message', (message) => {
    socket.emit('message', message);
  });
  socket.on('companionData', (id) => {
    socket.emit('companionData', db.getCompanionData(id))
  });
  socket.on('companions', () => {
    socket.emit('companions', db.getCompanions())
  });
  socket.on('disconnect', () => {
    db.setStatus('Off-line');
  });
});

