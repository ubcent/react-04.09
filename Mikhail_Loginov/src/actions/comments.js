import { createAction } from 'redux-actions';

import app from '../index';

export const commentsLoaded = createAction('[Comments] Load');
export const commentAdded = createAction('[Comments] Add');
export const commentEdited = createAction('[Comments] Edit');
export const commentDeleted = createAction('[Comments] Delete');

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

export const editComment = (comment) => (dispatch) => {
  app.put('comments', comment).then(() => {
    app.get('comments').then(res => {
      res.json().then(comments => {
        dispatch(commentEdited(comments));
      })
    })
  });
}

export const deleteComment = (id) => (dispatch) => {
  app.delete('comments', { id: id }).then(() => {
    app.get('comments').then(res => {
      res.json().then(comments => {
        dispatch(commentDeleted(comments));
      })
    });
  });
}
