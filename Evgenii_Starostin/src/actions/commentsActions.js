import { createAction } from 'redux-actions';

export const loadCommentsListRequest = createAction('LOAD_COMMENTS_LIST_REQUEST');
export const loadCommentsListFailure = createAction('LOAD_COMMENTS_LIST_FAILURE');
export const loadCommentsListSuccess = createAction('LOAD_COMMENTS_LIST_SUCCESS');

export const fetchCommentsList = (dispatch) => {
  dispatch(loadCommentsListRequest());
  fetch('api/comments?_expand=post')
    .then(response => response.json())
    .then(json => dispatch(loadCommentsListSuccess(json)))
    .catch(err => dispatch(loadCommentsListFailure(err)));
};
