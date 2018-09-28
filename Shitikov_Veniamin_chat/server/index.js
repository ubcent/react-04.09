const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
const users = [];

server.listen(3003, ()=>{
    console.log('Started on port 3003');
});

io.on('connection', socket => {
    socket.on('login', userName => {
        users.push({
            id: socket.id,
            name: userName,
        });
        console.log(users);
    });
    socket.on('message', message => {
        socket.broadcast.emit('message', message);
        socket.emit('message', message);
    });
});