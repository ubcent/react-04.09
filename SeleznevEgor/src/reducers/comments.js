import { handleActions } from 'redux-actions';

import { commentsLoaded } from '../actions/comments';

const initialState = {
    comments:[],
    finish: false,
    STEP:10,
};

export default handleActions({
    [commentsLoaded]: (state, action) => {
        return {
            ...state,
            comments:action.payload.comments,
            finish: action.payload.finish,
        };
    }
}, initialState);