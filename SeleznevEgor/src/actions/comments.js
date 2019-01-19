import { createAction } from 'redux-actions';
import {userLogin} from "./users";

// Акшн
export const commentsLoaded= createAction('[Comment] loaded');

export const getComments = (numbers) => (dispatch) => {
    fetch(`http://127.0.0.1:3050/getLastComments/${numbers}`
    ).then((res) => {
        return res.json();
    }).then((comments) =>{
        console.log(comments);
        dispatch(commentsLoaded(comments));
    }).catch((err) => console.log('error catch', err));
};


export const getPostComments = (id, numbers) => (dispatch) => {
    fetch(`http://127.0.0.1:3050/getPostComments/${id}/${numbers}`
    ).then((res) => {
        return res.json();
    }).then((comments) =>{
        dispatch(commentsLoaded(comments));
    }).catch((err) => console.log('error catch', err));
};
export const addComment= (data) => (dispatch) => {
    fetch('http://127.0.0.1:3050/addComment', {
        method: 'post',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: `author=${data.author}&postParrent=${data.post}&body=${data.body}`,
    }).then((res) => {
        return res.body();
    }).then((status) =>{
        console.log(status);
    }).catch((err) => console.log('error catch', err));
};
