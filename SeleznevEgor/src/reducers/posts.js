import { handleActions } from 'redux-actions';

import { postsLoaded } from '../actions/posts';

const initialState = {
    posts:[],
    finish: false,
};

export default handleActions({
    [postsLoaded]: (state, action) => {
        console.log('Prev State', state);
        const newSate = {
            ...state,
            posts:action.payload.posts,
            finish: action.payload.finish,
        };
        console.log('New State', newSate);
        return newSate ;
    }
}, initialState);