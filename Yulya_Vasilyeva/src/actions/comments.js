import { createAction } from 'redux-actions';

import requestData from './func';

export const getCommentsList = createAction('[Comments] Receive');
//подписываем событие
export const mountEventCommentsList = (dispatch) => {
    requestData('comments').then((data) => {
        dispatch(getCommentsList(data));//загружаем данные в store
    })
}