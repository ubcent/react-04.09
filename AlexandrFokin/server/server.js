import express from 'express';
// работа с вебсокетами
import socketIO from 'socket.io';
import http from 'http';
// для cross-origin resource sharing
import cors from 'cors';
// для парсинга тела запроса
import bodyParser from 'body-parser';
// позволяет сопоставлять объекты классов и документы коллекций из базы данных
import mongoose from 'mongoose';

// подключаем схему User
import {User} from './models';

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// подключаемся к БД test на локальном сервере
mongoose.connect('mongodb://localhost/test');

app.use(cors());
app.use(bodyParser.json());

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

/**
 * GET-запрос списка всех пользователей
 * req - параметры запроса (заголовки, тело и т.д.)
 * res - ответ
 */
app.get('/users', async(req, res) => {
  // ищем всех пользователей в БД
  const users = await User.find();

  // отправляем найденных пользователей клиенту в json-виде
  res.json(users);
});

/**
 * GET-запрос пользователя с указанным id
 * req - параметры запроса (заголовки, тело и т.д.)
 * res - ответ
 */
app.get('/users/:id', async(req, res) => {
  // ищем пользователя с указанным id в БД
  const user = await User.findById(req.params.id);

  // отправляем найденного пользователя клиенту в json-виде
  res.json(user);
});

/**
 * POST-запрос на создание и сохранение пользователя на сервере
 * req - параметры запроса (заголовки, тело и т.д.)
 * res - ответ
 */
app.post('/users', async(req, res) => {
  // создаем пользователя со свойствами из полученного тела post-запроса
  let user = new User(req.body);
  // сохраняем созданного пользователя в БД в коллекцию users
  user = await user.save();

  // отправляем созданного пользователя клиенту в json-виде
  res.json(user);
});