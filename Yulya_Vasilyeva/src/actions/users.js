import { createAction } from 'redux-actions';

import requestData from './func';

export const getPostUser = createAction('[User] Receive');
//подписываем событие
export const mountEvents = (dispatch) => {
    requestData('users').then((data) => {
        dispatch(getPostUser(data));//загружаем данные в store
    })
}