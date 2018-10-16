import { LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE } from 'actions/constans';

const initialState = {
    posts: [],
    currentPage: 1,
    count: 0,
    isLoading: false,
    didInvalidate: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_POSTS_REQUEST:
            return { ...state, isLoading: true, didInvalidate: false };

        case LOAD_POSTS_SUCCESS:
            let { currentPage } = action;
            let { posts, count } = action.response;
            return { ...state, posts, count, currentPage, isLoading: false, didInvalidate: false };

        case LOAD_POSTS_FAILURE:
            return { ...state, didInvalidate: true };

        default:
            return state
    }
};