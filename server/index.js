const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const socketIO = require('socket.io');
const http = require('http');

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);
const io = socketIO(server);

server.listen(3000, () => {
  console.log('Server has been started');
});

io.on('connection', (socket) => {
  // Записывать socket.id в базу
  socket.on('message', (message) => {
    /*
      User: 
      {
        id: string;
        username: string;
        fullName: string;
        password: string;
        socketId: string;
      }
      Dialog: 
      {
        id: string;
        users: [User];
      }
      Message:
      {
        id: string;
        dialogId: string;
        timestamp: Date;
        text: string;
        author: User;
      }
    */
    socket.broadcast.emit('message', message);
    socket.emit('message', message);
    // отправка адресно - socket.in(<id нужного сокета>).emit(...)
  });
});

io.on('disconnection', (socket) => {
  // Удалить id из базы
});

const { User } = require('./models');

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);

  res.json(user);
});

app.post('/users', async (req, res) => {
  let user = new User(req.body);
  user = await user.save();

  res.json(user);
});