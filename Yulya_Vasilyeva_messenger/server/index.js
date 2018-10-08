const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(3000, () => {
  console.log('Server has been started');
});

io.on('connection', (socket) => {
  // Записывать socket.id в базу
  socket.on('message', (message) => {
    socket.broadcast.emit('message', message);
    socket.emit('message', message);
    // отправка адресно - socket.in(<id нужного сокета>).emit(...)
  });
});

io.on('disconnection', (socket) => {
  // Удалить id из базы
});