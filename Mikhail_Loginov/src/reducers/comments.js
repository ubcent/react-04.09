import { handleActions } from 'redux-actions';

import { commentsLoaded, commentAdded, commentDeleted, commentEdited } from 'actions/comments';

const initialState = {
  entities: [],
};

export default handleActions({
  [commentsLoaded]: (state, actions) => {
    return {
      entities: actions.payload,
    }
  },
  [commentAdded]: (state, actions) => {
    return {
      ...state,
      entities: state.entities.concat(actions.payload),
    }
  },
  [commentDeleted]: (state, actions) => {
    return {
      entities: actions.payload,
    }
  },
  [commentEdited]: (state, actions) => {
    return {
      entities: actions.payload,
    }
  }
}, initialState);
