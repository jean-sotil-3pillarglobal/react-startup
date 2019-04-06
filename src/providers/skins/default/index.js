export default {
  overrides: {
    MuiButton: {
      contained: {
        '&:active': {
          boxShadow: 'initial',
        },
      },
    },
    MuiCardActionArea: {
      focusHighlight: {
        display: 'none',
      },
    },
    MuiCardContent: {
      root: {
        cursor: 'auto',
      },
    },
    MuiInputBase: {
      input: {
        '&:-webkit-autofill': {
          '-webkit-box-shadow': '0 0 0px 1000px transparent inset',
          transition: 'background-color 5000s ease-in-out 0s',
        },
        '&:-webkit-autofill:focus': {
          '-webkit-box-shadow': '0 0 0px 1000px transparent inset',
          transition: 'background-color 5000s ease-in-out 0s',
        },
        '&:-webkit-autofill:hover': {
          '-webkit-box-shadow': '0 0 0px 1000px transparent inset',
          transition: 'background-color 5000s ease-in-out 0s',
        },
        fontSize: '0.9rem',
        padding: '6px',
      },
      inputMultiline: {
        maxHeight: '60px',
        minHeight: '60px',
        overflow: 'scroll-y',
        padding: '6px',
      },
    },
    MuiTouchRipple: {
      root: {
        display: 'none',
      },
    },
  },
  palette: {
    background: {
      blackish: 'rgba(46,46,46,1)',
      dark: 'rgba(220,220,220,1)',
      darker: 'rgba(0, 0, 0, 0.10)',
      default: 'white',
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
    body1: {
      fontSize: '0.875rem',
      fontWeight: 300,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
    },
    fontWeight: 300,
    h1: {
      fontSize: '3.3rem',
      fontWeight: 300,
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 300,
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 300,
      lineHeight: '1.375rem',
      marginBottom: '10px',
    },
    h4: {
      fontSize: '1.23rem',
      fontWeight: 300,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 300,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 300,
    },
    overline: {
      fontSize: '1rem',
      fontWeight: 300,
    },
    subtitle1: {
      fontSize: '1.4rem',
      fontWeight: 300,
    },
    subtitle2: {
      fontSize: '1.2rem',
      fontWeight: 300,
    },
    useNextVariants: true,
  },
};
