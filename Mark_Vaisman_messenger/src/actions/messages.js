import {createAction} from 'redux-actions';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

export const messageReceived = createAction('[Message] Receive');
export const companionsReceived = createAction('[Companions] Receive');
export const companionDataReceived = createAction('[CompanionData] Receive');

export const setDataReceivers = (dispatch) => () => {
  socket.on('message', (message) => {
    dispatch(messageReceived(message));
  });
  socket.on('companionData', (info) => {
    dispatch(companionDataReceived(info));
  });
  socket.on('companions', (data) => {
    dispatch(companionsReceived(data));
  });
};

export const sendMessage = (dispatch) => (message) => {
  socket.emit('message', message);
};

export const getCompanionData = (dispatch) => (id) => {
  socket.emit('companionData', id);
};

export const getCompanions = (dispatch) => () => {
  socket.emit('companions');
};
