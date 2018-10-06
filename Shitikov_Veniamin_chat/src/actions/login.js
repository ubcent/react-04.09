import { createAction } from 'redux-actions';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3003');

//action
export const userLogIn = createAction('[User] LogIn');

//functions
export const submitLogin = dispatch => userName => {
    socket.emit('login', userName);
    dispatch(userLogIn());
};