import {combineReducers} from 'redux';

import blogPostsReducer from './blog-posts';
import commentsReducer from './comments';
import usersReducer from './users';

export default combineReducers({
    blogPosts: blogPostsReducer,
    comments: commentsReducer,
    users: usersReducer,
});
