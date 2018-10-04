import { combineReducers } from 'redux';
import posts from './postsReducer';
import comments from './commentsReducer';
import users from './usersReducer';

export default combineReducers({
  posts,
  comments,
  users,
});
