import { handleActions } from 'redux-actions';
//импортируем action
import { getPostsList, getPostDescr } from 'actions/posts';

const initialState = {
    postList: [],//список статей
    post: [],//описание статьи
};

export default handleActions({
    [getPostsList]: (state, action) => {
        return {
            ...state,
            postList: action.payload,
        }
    },
    [getPostDescr]: (state, action) => {
        return {
            ...state,
            post: action.payload,
        }
    },
}, initialState);