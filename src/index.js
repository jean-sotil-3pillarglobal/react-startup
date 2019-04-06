import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

// containers
import App from './app';

// redux store
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
