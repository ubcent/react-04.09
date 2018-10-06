import { createAction } from 'redux-actions';

export const loadListComments = (dispatch)=> (idArticle) =>{
    console.log('------4-------idArticle', idArticle);
        fetch(`http://localhost:8000/posts/${idArticle}/comments`)
            .then((response) => response.json())
            .then((comments) => {
                dispatch(loadList(comments));
                console.log('-----4----action',comments);
                console.log('loadList',loadList(comments));
                console.log('-----4------------------------------------');
            })
};

export const sendComments =  (dispatch) => (comment) => {
    console.log('------------SENDCOMMENT--------------',comment);

    fetch('http://localhost:8000/comments',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(comment)
    })
        .then((response) => response.json())
        .then((comment) =>{
            console.log(comment);
            dispatch(send(comment));
        });
};

export const loadList = createAction('[Comments] Load');
export const send = createAction('[Comments] Send');
