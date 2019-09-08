import Color from 'color';

const PRIMARY = {
  contrastText: '#000000',
  dark: '#2f3438',
  light: '#99c1c3',
  main: '#436186',
};

const SECONDARY = {
  contrastText: '#ffffff',
  dark: '#000000',
  light: '#484848',
  main: '#212121',
};

const palette = {
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
  dark: {
    contrastText: '#000000',
    dark: '#8d8d8d',
    light: '#efefef',
    main: '#bdbdbd',
  },
  default: {
    contrastText: '#212121',
    dark: '#616161',
    light: '#F5F5F5',
    main: '#9E9E9E',
  },
  disabled: {
    contrastText: '#ffffff',
    dark: '#373737',
    light: '#8e8e8e',
    main: '#9ea0a1',
  },
  error: {
    contrastText: '#fff',
    dark: 'rgba(87,2,2,1)',
    light: 'rgba(176,4,4,1)',
    main: 'rgb(255,79,79)',
  },
  primary: {
    contrastText: PRIMARY.contrastText,
    dark: PRIMARY.dark,
    light: PRIMARY.light,
    main: Color(PRIMARY.main).fade(0.1).string(),
  },
  secondary: {
    contrastText: SECONDARY.contrastText,
    dark: SECONDARY.dark,
    light: SECONDARY.light,
    main: SECONDARY.main,
  },
  success: {
    contrastText: '#fff',
    dark: 'rgba(87,2,2,1)',
    light: 'rgba(176,4,4,1)',
    main: 'rgb(38,156,50)',
  },
  utils: {
    black: 'rgb(45,46,47)',
    darker: Color(PRIMARY.dark).fade(0.5).string(),
    grey: '#e1e2e1',
    highlight: '#4c9aff',
    light: Color(PRIMARY.main).fade(0.5).string(),
    lighter: Color(PRIMARY.main).fade(0.35).toString(),
    transparent: Color(PRIMARY.main).fade(0.8).string(),
  },
  warning: {
    contrastText: '#fff',
    dark: 'rgba(87,2,2,1)',
    light: 'rgba(176,4,4,1)',
    main: 'rgb(244,243,86)',
  },
};

export default {
  palette,
  typography: {
    body1: {
      fontSize: '1.2rem',
      fontWeight: 300,
    },
    body2: {
      fontSize: '1.3rem',
      fontWeight: 400,
    },
    caption: {
      display: 'inline',
      fontSize: '0.75rem',
      fontWeight: 300,
    },
    fontWeight: 300,
    h1: {
      fontSize: '2.6rem',
      fontWeight: 500,
      textTransform: 'capitalize',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 400,
      textTransform: 'capitalize',
    },
    h3: {
      fontSize: '1.9rem',
      fontWeight: 400,
      textTransform: 'capitalize',
    },
    h4: {
      fontSize: '1.4em',
      fontWeight: 400,
      textTransform: 'capitalize',
    },
    h5: {
      fontSize: '0.425rem',
      fontWeight: 300,
      textTransform: 'capitalize',
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
      textTransform: 'capitalize',
    },
    subtitle2: {
      fontSize: '1.2rem',
      fontWeight: 300,
    },
    useNextVariants: true,
  },
};
