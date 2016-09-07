import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './container/App';
import reducer from './reducer';

const store = createStore(
  reducer,
  applyMiddleware(thunk, createLogger()),
);

ReactDom.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('tic tac toe'),
);
