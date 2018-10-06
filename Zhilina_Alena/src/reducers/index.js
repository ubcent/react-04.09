import { combineReducers } from 'redux';

import commentsReducer from 'reducers/comments';
import blogsReducer from 'reducers/blogs';

export default combineReducers({
    commentsReducer: commentsReducer,
    blogsReducer:blogsReducer,
});
