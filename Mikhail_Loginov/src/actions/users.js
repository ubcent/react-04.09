import { createAction } from 'redux-actions';

import app from '../index';

export const usersLoaded = createAction('[Users] Load');

export const loadUsers = () => (dispatch) => {
  app.get('users').then(res => {
    res.json().then(users => {
      dispatch(usersLoaded(users));
    })
  });
}
