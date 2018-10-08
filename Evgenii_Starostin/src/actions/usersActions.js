import { createAction } from 'redux-actions';

export const loadUsersListRequest = createAction('LOAD_USERS_LIST_REQUEST');
export const loadUsersListFailure = createAction('LOAD_USERS_LIST_FAILURE');
export const loadUsersListSuccess = createAction('LOAD_USERS_LIST_SUCCESS');

export const loadUserRequest = createAction('LOAD_USER_REQUEST');
export const loadUserFailure = createAction('LOAD_USER_FAILURE');
export const loadUserSuccess = createAction('LOAD_USER_SUCCESS');

export const addUserRequest = createAction('ADD_USER_REQUEST');
export const addUserFailure = createAction('ADD_USER_FAILURE');
export const addUserSuccess = createAction('ADD_USER_SUCCESS');

export const deleteUserRequest = createAction('DELETE_USER_REQUEST');
export const deleteUserFailure = createAction('DELETE_USER_FAILURE');
export const deleteUserSuccess = createAction('DELETE_USER_SUCCESS');

export const updateUserRequest = createAction('UPDATE_USER_REQUEST');
export const updateUserFailure = createAction('UPDATE_USER_FAILURE');
export const updateUserSuccess = createAction('UPDATE_USER_SUCCESS');

export const fetchUsersList = () => (dispatch) => {
  dispatch(loadUsersListRequest());
  fetch('api/users')
    .then(response => response.json())
    .then(json => dispatch(loadUsersListSuccess(json)))
    .catch(err => dispatch(loadUsersListFailure(err)));
};

export const fetchUser = userId => (dispatch) => {
  dispatch(loadUserRequest());
  fetch(`api/users/${userId}`)
    .then(response => response.json())
    .then(json => dispatch(loadUserSuccess(json)))
    .catch(err => dispatch(loadUserFailure(err)));
};

export const addUser = userName => (dispatch) => {
  dispatch(addUserRequest());
  fetch('api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: userName }),
  }).then(response => response.json())
    .then(json => dispatch(addUserSuccess(json)))
    .catch(err => dispatch(addUserFailure(err)));
};

export const deleteUser = userId => (dispatch) => {
  dispatch(deleteUserRequest());
  fetch(`api/users/${userId}`, {
    method: 'DELETE',
  }).then(response => response.json())
    .then(json => dispatch(deleteUserSuccess(json)))
    .catch(err => dispatch(deleteUserFailure(err)));
};

export const updateUser = (userId, userName) => (dispatch) => {
  dispatch(updateUserRequest());
  fetch(`api/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: userName }),
  }).then(response => response.json())
    .then(json => dispatch(updateUserSuccess({ ...json, name: userName })))
    .catch(err => dispatch(updateUserFailure(err)));
};
