import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import rootReducer from './redux/reducers/rootReducer';

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 
//Bu eklenti devtools kullanabilmek için.
//Store Yapısı (virgülden sonrası önemli değil!)Reducer, storea bağlandı. 
ReactDOM.render(
  <Provider store={store}> {/* Provider en büyük component, tüm uygulamayı içeren! */}
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();