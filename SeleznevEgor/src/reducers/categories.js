import { handleActions } from 'redux-actions';

import { categoryLoaded, categoryChoise } from '../actions/category';

const initialState = {
    categories:[],
    active: '0',
};

export default handleActions({
    [categoryLoaded]: (state, action) => {
        return {
            ...state,
            categories:action.payload,
        };
    },
    [categoryChoise]: (state, action) =>{
        return {
            ...state,
            active:action.payload,
        };
    },
}, initialState);