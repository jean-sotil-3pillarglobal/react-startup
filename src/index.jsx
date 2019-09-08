import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

// containers
import App from './app.jsx';

// redux store
import store from './store';

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);
