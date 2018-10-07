import {handleActions} from 'redux-actions';

import {commentsLoaded, commentAdded} from 'actions/comments';

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
  }
}, initialState);
