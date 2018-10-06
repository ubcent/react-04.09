import { handleActions } from 'redux-actions';
//импортируем action
import { getPostUser } from 'actions/users';

const initialState = {
    userList: [],//объекты наших пользователей
};

export default handleActions({
    [getPostUser]: (state, action) => {
        return {
            ...state,
            userList: action.payload,
        }
    }
}, initialState);