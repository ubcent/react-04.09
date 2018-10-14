import { combineReducers } from 'redux';

import userReducer from './users';
import postReducer from './posts';
import commentReducer from './comments';
import categoriesReducer from './categories'

export default combineReducers({
    users: userReducer,
    posts: postReducer,
    comments: commentReducer,
    categories: categoriesReducer,
});