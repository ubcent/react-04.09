import { handleActions } from 'redux-actions';
//импортируем action
import { getCommentsList } from 'actions/comments';
import { getCommentsPost } from 'actions/comments';

const initialState = {
    commentsList: [],
    commentsPost: [],
};

export default handleActions({
    [getCommentsList]: (state, action) => {//список всех комментариев
        return {
            ...state,
            commentsList: action.payload,
        }
    },
    [getCommentsPost]: (state, action) => {//список комментариев для поста
        return {
            ...state,
            commentsPost: action.payload,
        }
    }
}, initialState);