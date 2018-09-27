const express = require('express');
// работа с вебсокетами
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// поднимаем сервер на порту 3002
server.listen(3002, () => {
  console.log('Server up at port 3002');
});

// подписываемся на события на сервере
// socket - подключенный клиент
// срабатывает при подключении клиента к серверу
io.on('connection', socket => {
  // принимаем событие 'message', содержащее сообщение от клиента
  socket.on('message', message => {
    /*
      User:
      {
        id: string;
        username: string;
        fullname: string;
        password: string;
        socketid: string;
      }
      Dialog:
      {
        id: string;
        users: [string];
      }
      Message:
      {
        id: string;
        dialogID: string;
        timestamp: Date;
        text: string;
        author: User;
      }
     */
    // При подключении клиента заносим его в БД
    // получение id
    // socket.id
    // отправляем сообщение всем клиентам, кроме отправителя
    socket.broadcast.emit('message', message);
    // отправляем сообщение отправителю
    socket.emit('message', message);
    // отправляем сообщение по указанному id сокета, т.е. адресно конкретному клиенту
    // socket.in(id).emit('message', message);
  });
});

// отключение клиента от сервера
io.on('disconnection', socket => {
  // удаляем id из базы
});