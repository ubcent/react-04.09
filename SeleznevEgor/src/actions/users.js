import { createAction } from 'redux-actions';

// Акшн
export const userLogin= createAction('[User] login');

// Side effects
export const mountEvents = () => (dispatch, getState) => {
    socket.on('message', (message) => {
        dispatch(messageReceived(message));
    });
};

export const userTryLogin = (data) => (dispatch) => {
    console.log('try login', data);
    fetch('http://127.0.0.1:3050/auth', {
        method: 'post',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: `login=${data.login}&password=${data.password}`,
    }).then((res) => {
        return res.json();
    }).then((user) =>{
        dispatch(userLogin(user));
    }).catch((err) => console.log('error catch', err));
};
