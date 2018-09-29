import { createAction } from 'redux-actions';

export const loadUsersListRequest = createAction('LOAD_USERS_LIST_REQUEST');
export const loadUsersListFailure = createAction('LOAD_USERS_LIST_FAILURE');
export const loadUsersListSuccess = createAction('LOAD_USERS_LIST_SUCCESS');

export const loadUserRequest = createAction('LOAD_USER_REQUEST');
export const loadUserFailure = createAction('LOAD_USER_FAILURE');
export const loadUserSuccess = createAction('LOAD_USER_SUCCESS');

export const fetchUsersList = () => (dispatch) => {
  dispatch(loadUsersListRequest());
  fetch('api/users?_embed=posts&_embed=comments')
    .then(response => response.json())
    .then(json => dispatch(loadUsersListSuccess(json)))
    .catch(err => dispatch(loadUsersListFailure(err)));
};

export const fetchUser = userId => (dispatch) => {
  dispatch(loadUserRequest());
  fetch(`api/users/${userId}?_embed=posts&_embed=comments`)
    .then(response => response.json())
    .then(json => dispatch(loadUserSuccess(json)))
    .catch(err => dispatch(loadUserFailure(err)));
};
