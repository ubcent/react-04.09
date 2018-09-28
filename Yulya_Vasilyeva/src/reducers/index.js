//для корневого редьюсера
import { combineReducers } from 'redux';
//импортируем редьюсер для хранения статей
import postsReducer from './posts';
//импортируем редьюсер для хранения пользователей
import userReducer from './users';

export default combineReducers({
    posts: postsReducer, // за ветку post в хранилище отвечает редьюсер postsReducer
    users: userReducer,
})