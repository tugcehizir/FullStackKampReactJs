import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

export default combineReducers ({ todos: todoReducer }); //Fonksiyon, uygulamanın reducerlarını bağlama işlemi.
//Birden fazla bağlarken: {todos: todoReducer, todos2: todoReducer2}
//rootReducer'da görülen her şey çalışır.