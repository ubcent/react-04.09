import { combineReducers } from 'redux';

import reducerPosts from './reduserPosts';
import reducerUsers from './reduserUsers';

export default combineReducers({
    posts: reducerPosts,
    users: reducerUsers
});