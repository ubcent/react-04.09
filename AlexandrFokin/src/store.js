// createStore для создания контейнеров, используемых для хранения состояния приложения
// applyMiddleware для подключения Middleware
import {createStore, applyMiddleware} from 'redux';
// logger для экшенов
import logger from 'redux-logger';
// Функция для создания action creators, возвращающих функцию вместо action-объекта. Можно
// создавать задержку для отправки (dispatch) action, или отправки (dispatch) только при
// определенных условиях. Внутренняя функция получает методы хранилища (store) dispatch и
// getState в виде параметров.
import thunk from 'redux-thunk';
// корневой reducer, управляющий всеми reducers, обрабатывающими action и меняющими содержимое
// store
import rootReducer from 'reducers';

/**
 * Создает store - хранилище состояния приложения *
 */
export default createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    // логгер должен быть последним Middleware в цепочке
    logger,
    ),
);