import { createAction } from 'redux-actions';

export const loadListBlogs = (dispatch) => {
    fetch(`http://localhost:8000/blogs/?_expand=user`)
        .then((response) => response.json())
        .then((blogs) => {
            dispatch(loadList(blogs));
        });
};

export const loadList = createAction('[Blogs] Load');
