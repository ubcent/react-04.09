import { createAction } from 'redux-actions';

// Акшн
export const postsLoaded= createAction('[Post] loaded');

// Side effects
export const mountEvents = () => (dispatch, getState) => {
    socket.on('message', (message) => {
        dispatch(messageReceived(message));
    });
};

export const getPosts = (cat, numbers) => (dispatch) => {
    console.log('get posts', cat, numbers);
    fetch(`http://127.0.0.1:3050/posts/${cat}/${numbers}`
    ).then((res) => {
        return res.json();
    }).then((posts) =>{
        dispatch(postsLoaded(posts));
    }).catch((err) => console.log('error catch', err));
};
