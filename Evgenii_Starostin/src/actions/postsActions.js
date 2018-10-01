import { createAction } from 'redux-actions';

export const loadPostsListRequest = createAction('LOAD_POSTS_LIST_REQUEST');
export const loadPostsListFailure = createAction('LOAD_POSTS_LIST_FAILURE');
export const loadPostsListSuccess = createAction('LOAD_POSTS_LIST_SUCCESS');

export const loadPostRequest = createAction('LOAD_POST_REQUEST');
export const loadPostFailure = createAction('LOAD_POST_FAILURE');
export const loadPostSuccess = createAction('LOAD_POST_SUCCESS');

export const fetchPostsList = () => (dispatch) => {
  dispatch(loadPostsListRequest());
  fetch('api/posts')
    .then(response => response.json())
    .then(json => dispatch(loadPostsListSuccess(json)))
    .catch(err => dispatch(loadPostsListFailure(err)));
};

export const fetchPost = postId => (dispatch) => {
  dispatch(loadPostRequest());
  fetch(`api/posts/${postId}`)
    .then(response => response.json())
    .then(json => dispatch(loadPostSuccess(json)))
    .catch(err => dispatch(loadPostFailure(err)));
};
