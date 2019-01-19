import { createAction } from 'redux-actions';

// Акшн
export const categoryLoaded= createAction('[Category] loaded');
export const categoryChoise= createAction('[Category] choise');

// Side effects

export const getCategories = () => (dispatch) => {
    fetch(`http://127.0.0.1:3050/getCategories`
    ).then((res) => {
        return res.json();
    }).then((categories) =>{
        console.log('response',categories);
        dispatch(categoryLoaded(categories));
    }).catch((err) => console.log('error catch', err));
};

export const setActiveCategory  = (catId) => (dispatch) =>{
    dispatch(categoryChoise(catId))
};
