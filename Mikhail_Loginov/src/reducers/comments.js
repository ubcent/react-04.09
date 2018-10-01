import {handleActions} from 'redux-actions';

import {commentsLoaded} from 'actions/comments';

const initialState = {
  entities: [],
};

export default handleActions({
  [commentsLoaded]: (state, actions) => {
    return {
      entities: actions.payload,
    }
  }
}, initialState);
