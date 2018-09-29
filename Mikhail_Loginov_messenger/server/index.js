const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is now listening to port ${PORT}`);
});

io.on('connection', (socket) => {
    // Записывать socket.id в базу
    socket.on('message', (message) => {
        /* На бекенде будет храниться 3 сущности:
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

/*
io.on('disconnection', (socket) => {
    // Удалить id из базы
});
*/