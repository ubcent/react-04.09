import { handleActions } from 'redux-actions';

import { userLogin, usersLoaded } from '../actions/users';

const initialState = {
    useractive:{
        logined:false
    },
    usershow:{},
    users:{
        users:[],
        finish:false,
    },
    STEP:10,
};

export default handleActions({
    [userLogin]: (state, action) => {
        return {
            ...state,
            useractive: action.payload
        };
    },
    [usersLoaded]: (state, action) => {
        return {
            ...state,
            users: action.payload
        };
    }
}, initialState);