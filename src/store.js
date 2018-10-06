import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

/* const logger = store => next => action => {
  console.log('Previous State', store.getState());
  console.log('Action', action);

  const result = next(action);
  console.log('Next State', store.getState());
  return result;
} */

export default createStore(
  rootReducer,
  applyMiddleware(logger, thunk),
);