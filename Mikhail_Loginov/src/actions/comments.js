import { createAction } from 'redux-actions';

import app from '../index';

export const commentsLoaded = createAction('[Comments] Load');
export const commentAdded = createAction('[Comments] Add');

export const loadComments = () => (dispatch) => {
  app.get('comments').then(res => {
    res.json().then(comments => {
      dispatch(commentsLoaded(comments));
    })
  });
}

export const addComment = (comment) => (dispatch) => {
  app.post('comments', comment).then(res => {
    res.json().then(comment => {
      dispatch(commentAdded(comment));
    })
  });
}
