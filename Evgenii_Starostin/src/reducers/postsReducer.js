import { handleActions } from 'redux-actions';

import {
  loadPostsListRequest,
  loadPostsListFailure,
  loadPostsListSuccess,
  loadPostRequest,
  loadPostFailure,
  loadPostSuccess,
} from 'Actions/postsActions';

const initialState = {
  postsList: [],
  post: null,
  fetching: false,
  errors: [],
};

export default handleActions({
  [loadPostsListRequest]: state => ({
    ...state,
    postsList: [],
    errors: [],
    fetching: true,
  }),
  [loadPostsListFailure]: (state, action) => ({
    ...state,
    errors: state.errors.concat([action.payload]),
    fetching: false,
  }),
  [loadPostsListSuccess]: (state, action) => ({
    ...state,
    postsList: action.payload,
    fetching: false,
  }),
  [loadPostRequest]: state => ({
    ...state,
    post: null,
    errors: [],
    fetching: true,
  }),
  [loadPostFailure]: (state, action) => ({
    ...state,
    errors: state.errors.concat([action.payload]),
    fetching: false,
  }),
  [loadPostSuccess]: (state, action) => ({
    ...state,
    post: action.payload,
    fetching: false,
  }),
}, initialState);
