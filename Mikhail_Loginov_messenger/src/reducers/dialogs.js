import {handleActions} from 'redux-actions';

const initialState = [
  {
    id: "1",
    users: [
      {
        id: '1',
        username: 'Mikhail',
        fullname: 'Mikhail',
        password: '12345',
        sockedId: '1'
      }, {
        id: '2',
        username: 'John',
        fullname: 'John',
        password: '12345',
        sockedId: '2'
      }
    ]
  },
  {
    id: "2",
    users: [
      {
        id: '1',
        username: 'Mikhail',
        fullname: 'Mikhail',
        password: '12345',
        sockedId: '1'
      }, {
        id: '3',
        username: 'David',
        fullname: 'David',
        password: '12345',
        sockedId: '2'
      }
    ]
  },
  {
    id: "3",
    users: [
      {
        id: '1',
        username: 'Mikhail',
        fullname: 'Mikhail',
        password: '12345',
        sockedId: '1'
      }, {
        id: '4',
        username: 'Rachel',
        fullname: 'Rachel',
        password: '12345',
        sockedId: '2'
      }
    ]
  },
]

export default handleActions({}, initialState);
