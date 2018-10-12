import { handleActions } from 'redux-actions';

import { userLogin } from '../actions/users';

const initialState = {
    useractive:{
        logined:false
    },
    usershow:{},
    users:[],
};

export default handleActions({
    [userLogin]: (state, action) => {
        return {
            ...state,
            useractive: action.payload
        };
    }
}, initialState);