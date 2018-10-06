import { createAction } from 'redux-actions';

export const loadListComments = (dispatch)=> (idArticle) =>{
        fetch(`http://localhost:8000/posts/${idArticle}/comments`)
            .then((response) => response.json())
            .then((comments) => {
                dispatch(loadList(comments));
            })
};

export const sendComments =  (dispatch) => (comment) => {

    fetch('http://localhost:8000/comments',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
        .then((response) => response.json())
        .then((comment) =>{
            dispatch(send(comment));
        });
};

export const loadList = createAction('[Comments] Load');
export const send = createAction('[Comments] Send');
