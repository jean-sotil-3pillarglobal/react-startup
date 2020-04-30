import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

// redux store
import store from './store';

const root = document.getElementById('root');

const load = async () => {
  const { default: App } = await import('./app');

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>,
    root,
  );
};

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./app', () => requestAnimationFrame(load));
}

load();
