import { createAction } from 'redux-actions';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

// Акшн
export const messageReceived = createAction('[Message] Receive');

// Side effects
export const mountEvents = () => (dispatch, getState) => {
  socket.on('message', (message) => {
    dispatch(messageReceived(message));
  });
};

export const sendMessage = (message) => (dispatch) => {
  socket.emit('message', message);
};
