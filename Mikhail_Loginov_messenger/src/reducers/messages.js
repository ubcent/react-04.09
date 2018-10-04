import {handleActions} from 'redux-actions';

import {messageReceived} from 'actions/messages';

const initialState = {
  entities: [
    {
      id: '1',
      dialogId: '1',
      timestamp: 1537892683921,
      text: 'My awesome comment',
      author: {
        id: '2',
        username: 'John',
        fullname: 'John',
        password: '12345',
        sockedId: '2'
      }
    }, {
      id: '2',
      dialogId: '2',
      timestamp: 1537892683921,
      text: 'Another awesome comment',
      author: {
        id: '3',
        username: 'David',
        fullname: 'David',
        password: '12345',
        sockedId: '3'
      }
    }, {
      id: '3',
      dialogId: '3',
      timestamp: 1537892683921,
      text: 'This chat is working!',
      author: {
        id: '4',
        username: 'Rachel',
        fullname: 'Rachel',
        password: '12345',
        sockedId: '4'
      }
    }
  ]
};

export default handleActions({
  [messageReceived]: (state, action) => {
    return {
        ...state,
        entities: state.entities.concat([action.payload]),
    }
  }
}, initialState);
