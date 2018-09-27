import {createStore} from 'redux';
// обрабатывает action и меняет содержимое store
import rootReducer from 'reducers';

/**
 * Создает store
 */
export default createStore(rootReducer);