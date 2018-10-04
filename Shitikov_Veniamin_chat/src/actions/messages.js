import { createAction } from 'redux-actions';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3003');

//action
export const messageReceived = createAction('[Message] Receive');

//functions
export const mountEvents = dispatch => {
    socket.on('message', message => {
        dispatch(messageReceived(JSON.parse(message)));
    })
};

export const sendMessage = dispatch => message => {
    socket.emit('message', message);
};

