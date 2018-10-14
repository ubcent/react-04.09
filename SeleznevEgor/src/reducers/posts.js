import { handleActions } from 'redux-actions';

import { postsLoaded, postIdLoaded } from '../actions/posts';

const initialState = {
    posts:[],
    STEP:10,
    finish: false,
    postActive : {
        title:'',
        author:'',
        body:[],
        category:'',
        date:'',
        prevImg:'',
    }
};

export default handleActions({
    [postsLoaded]: (state, action) => {
        return {
            ...state,
            posts:action.payload.posts,
            finish: action.payload.finish,
        };
    },
    [postIdLoaded]: (state, action) => {
        console.log('prev state', state);
        const newstate = {
            ...state,
            postActive: action.payload.post
        };
        console.log('new state',newstate);
        return newstate;
    },
}, initialState);