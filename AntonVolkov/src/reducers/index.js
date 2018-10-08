import { combineReducers } from 'redux';

import postsReducer from './reduserPosts';

export default combineReducers({
    posts: postsReducer,
});