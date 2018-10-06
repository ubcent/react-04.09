//создаем хранлище данных
import { createStore } from 'redux';

//импортируем корневой редьюсер
import rootReducer from 'reducers/';
//передаем в хранилище корневой редьюсер
export default createStore(rootReducer);