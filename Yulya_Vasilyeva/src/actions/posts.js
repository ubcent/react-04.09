import { createAction } from 'redux-actions';

import requestData from './func';

export const getPostsList = createAction('[Posts] Receive');
export const getPostDescr = createAction('[Post] Receive');

// получаем список статей
export const mountEventPostList = (dispatch) => {
    requestData('article').then((data) => {
        dispatch(getPostsList(data));
    })
}
//получаем описание статьи
export const mountEventPost = (dispatch) => (id) => {
    requestData(`article/${id}`).then((data) => {
        dispatch(getPostDescr(data));
    })
}