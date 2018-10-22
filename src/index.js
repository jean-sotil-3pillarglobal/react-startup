import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './app';

// redux store
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
