import { createAction } from 'redux-actions';

export const loadListBlogs = (dispatch) => {
    fetch(`http://localhost:8000/blogs/?_expand=user`)
        .then((response) => response.json())
        .then((blogs) => {
            dispatch(loadList(blogs));
            console.log('-----4----action',blogs);
            console.log('loadList',loadList(blogs));
            console.log('-----4------------------------------------');
        });
};

export const loadList = createAction('[Blogs] Load');
