// библиотека для создания контейнеров, используемых для хранения состояния приложения
import {createStore} from 'redux';
// корневой reducer, управляющий всеми reducers, обрабатывающими action и меняющими содержимое
// store
import rootReducer from 'reducers';

/**
 * Создает store - хранилище состояния приложения
 * 
 */
export default createStore(rootReducer);