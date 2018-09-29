import {handleActions} from 'redux-actions';

import {messageReceived, companionsReceived, companionDataReceived} from 'actions/messages';

const initialState = {
  companionList: [],
  companionId: 0,
  companionName: '',
  companionStatus: '',
  companionMessages: '',
  userMessages: '',
};

export default handleActions({
  [messageReceived]: (state, action) => {
    return {
      ...state,
      userMessages: state.userMessages.concat(action.payload, '\n\n'),
    }
  },
  [companionDataReceived]: (state, action) => {
    return {
      ...state,
      companionId: action.payload.info.id,
      companionName: action.payload.info.name,
      companionStatus: action.payload.info.status,
      companionMessages: action.payload.messages,
      userMessages: '',
    }
  },
  [companionsReceived]: (state, action) => {
    return {
      ...state,
      companionList: action.payload,
    }
  }
}, initialState);