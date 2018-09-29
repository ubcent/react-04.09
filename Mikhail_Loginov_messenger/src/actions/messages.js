import {createAction} from 'redux-actions';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');

export const messageReceived = createAction('[Message] Receive');

export const mountEvents = (dispatch) => {
    socket.on('message', (message) => {
        dispatch(messageReceived(message));
    });
};

export const sendMessage = () => (message) => {
    socket.emit('message', message);
};
