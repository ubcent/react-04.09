import { combineReducers } from 'redux';

import userReducer from './users';
import postReducer from './posts'

export default combineReducers({
    users: userReducer,
    posts: postReducer,
});