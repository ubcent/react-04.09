import { UPDATE_COMMENTS } from 'actions/constans';

const initialState = {
    comments: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_COMMENTS:
            return { ...state, comments: action.comments };
    }
    return state;
};