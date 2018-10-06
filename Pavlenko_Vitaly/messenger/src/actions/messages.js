import {createAction} from 'redux-actions';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

// Actions
export const messageReceived = createAction('[Message] Receive');

// Side effects
export const mountEvents = (dispatch) => {
    socket.on('message', (message) => {
        dispatch(messageReceived(message));
    });
};

export const sendMessage = (dispatch) => (message) => {
    socket.emit('message', message);
};