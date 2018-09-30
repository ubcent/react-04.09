import { createAction } from 'redux-actions';

import app from '../index';

export const commentsLoaded = createAction('[Comments] Load');

export const loadComments = () => (dispatch) => {
  app.get('comments').then(res => {
    res.json().then(comments => {
      dispatch(commentsLoaded(comments));
    })
  });
}
