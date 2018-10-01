import {handleActions} from 'redux-actions';

import {usersLoaded} from 'actions/users';

const initialState = {
  entities: [],
};

export default handleActions({
  [usersLoaded]: (state, actions) => {
    return {
      entities: actions.payload,
    }
  }
}, initialState);
