import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; /* code change */
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js';
import App from './App';
import './index.css';
 
const store = createStore(shoppingListItemReducer);
 
// code change - added Provider to wrap around App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider> /* code change */,
  document.getElementById('root')
);
