import { LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE } from 'actions/constans';

const initialState = {
    users: [],
    currentPage: 1,
    count: 0,
    isLoading: false,
    didInvalidate: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_USERS_REQUEST:
            return { ...state, isLoading: true, didInvalidate: false };

        case LOAD_USERS_SUCCESS:
            let { currentPage } = action;
            let { users, count } = action.response;
            users = currentPage > state.currentPage ? state.users.concat(users) : users;
            return { ...state, users, count, currentPage, isLoading: false, didInvalidate: false };

        case LOAD_USERS_FAILURE:
            return { ...state, didInvalidate: true };

        default:
            return state
    }
};
