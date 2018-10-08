import { UPDATE_USERS } from 'actions/constans';

const initialState = {
    users: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_USERS:
            return { ...state, users: action.users };
    }
    return state;
};