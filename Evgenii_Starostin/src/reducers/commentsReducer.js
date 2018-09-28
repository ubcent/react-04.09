import { handleActions } from 'redux-actions';

import {
  loadCommentsListRequest,
  loadCommentsListFailure,
  loadCommentsListSuccess,
} from 'Actions/commentsActions';

const initialState = {
  commentsList: [],
  fetching: false,
  errors: [],
};

export default handleActions({
  [loadCommentsListRequest]: state => ({
    ...state,
    commentsList: [],
    errors: [],
    fetching: true,
  }),
  [loadCommentsListFailure]: (state, action) => ({
    ...state,
    errors: state.errors.concat([action.payload]),
    fetching: false,
  }),
  [loadCommentsListSuccess]: (state, action) => ({
    ...state,
    commentsList: action.payload,
    fetching: false,
  }),
}, initialState);
