const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

server.listen(3003, ()=>{
    console.log('Started on port 3003');
})

io.on('connection', socket => {
    console.log(socket);
    socket.on('message', message => {
        socket.broadcast.emit('message', message);
        socket.emit('message', message);
    })
})