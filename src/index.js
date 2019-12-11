import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

// The composer allows us to use both thunk middleware AND the Redux dev tools.
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  allReducers,
  composeEnhancer
)

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider>
    <App />
  </Provider>, rootElement
);
