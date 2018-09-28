import { handleActions } from 'redux-actions';
//импортируем action
import { getCommentsList } from 'actions/comments';

const initialState = {
    commentsList: [],//объекты наших пользователей
};

export default handleActions({
    [getCommentsList]: (state, action) => {
        return {
            ...state,
            commentsList: action.payload,
        }
    }
}, initialState);