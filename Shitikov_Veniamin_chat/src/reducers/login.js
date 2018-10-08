import { handleActions } from 'redux-actions';

import { userLogIn } from '../actions/login';

const initialState = {
    isValidUser: false,
};

export default handleActions({
    [userLogIn]: (state, action) => {
        return {
            ...state,
            isValidUser: true,
        }
    }
}, initialState);