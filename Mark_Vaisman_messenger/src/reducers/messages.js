import {handleActions} from 'redux-actions';

import {messageReceived, userMessagesReceived, companionsReceived, companionDataReceived} from 'actions/messages';

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
  [userMessagesReceived]: (state, action) => {
    return {
      ...state,
      userMessages: action.payload.messages,
    }
  },
  [companionDataReceived]: (state, action) => {
    return {
      ...state,
      companionId: action.payload.info.companionId,
      companionName: action.payload.info.name,
      companionStatus: action.payload.info.status,
      companionMessages: action.payload.messages,
    }
    
  },
  [companionsReceived]: (state, action) => {
    return {
      ...state,
      companionList: action.payload,
    }
  }
}, initialState);
