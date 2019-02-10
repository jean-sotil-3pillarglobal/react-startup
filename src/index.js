import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import {
  Button,
  createMuiTheme,
  CssBaseline,
  MuiThemeProvider,
} from '@material-ui/core';

// containers
import App from './app';

// redux store
import store from './store';

// overrides global styles
const theme = createMuiTheme({
  palette: {
    background: {
      blackish: 'rgba(46,46,46,1)',
      dark: 'rgba(220,220,220,1)',
      darker: 'rgba(0, 0, 0, 0.10)',
      default: 'rgba(238,238,238,1)',
      footer: 'rgba(92,92,92,1)',
      gradient: 'linear-gradient(45deg, rgba(87,2,2,1) 0%, rgba(176,4,4,1) 100%)',
      gradientGray: 'linear-gradient(180deg, rgba(238,238,238,1) 0%, rgba(220,220,220,1) 80%)',
      light: '#fafafa',
      main: '#e9e9e9',
      transparent: 'rgba(0,0,0,0)',
    },
    error: {
      contrastText: '#fff',
      dark: 'rgba(87,2,2,1)',
      light: 'rgba(176,4,4,1)',
      main: 'rgba(163,4,4,1)',
    },
    primary: {
      contrastText: '#ffffff',
      dark: '#001064',
      light: '#5f5fc4',
      main: '#283593',
    },
    secondary: {
      contrastText: '#000000',
      dark: '#75ccb9',
      light: '#dbffff',
      main: '#a7ffeb',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <App />
      </React.Fragment>
    </MuiThemeProvider>
  </Provider>,
  document.querySelector('#root'),
);
