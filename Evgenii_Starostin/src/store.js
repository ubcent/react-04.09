import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'Reducers/index';

export default createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));
