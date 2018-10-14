import { createAction } from 'redux-actions';

// Акшн
export const postsLoaded= createAction('[Posts] loaded');
export const postIdLoaded= createAction('[PostId] loaded');


export const getPosts = (cat, numbers) => (dispatch) => {
    fetch(`http://127.0.0.1:3050/posts/${cat}/${numbers}`
    ).then((res) => {
        return res.json();
    }).then((posts) =>{
        dispatch(postsLoaded(posts));
    }).catch((err) => console.log('error catch', err));
};
export const getPost = (id, number) => (dispatch) => {
    fetch(`http://127.0.0.1:3050/post/${id}/${number}`
    ).then((res) => {
        return res.json();
    }).then((post) =>{
        dispatch(postIdLoaded(post));
    }).catch((err) => console.log('error catch', err));
};
