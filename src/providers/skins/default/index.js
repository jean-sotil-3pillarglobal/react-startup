import Color from 'color';

const PRIMARY = {
  contrastText: '#000000',
  dark: '#818a95',
  light: '#f8f8f8',
  main: '#e9e9e9',
};

const SECONDARY = {
  contrastText: '#fafafa',
  dark: '#212121',
  light: '#424242',
  main: '#616161',
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
    blur: 'rgba(255,255,255,0.3)',
    darker: Color(PRIMARY.dark).fade(0.5).string(),
    grey: '#e1e2e1',
    highlight: '#4c9aff',
    light: Color(PRIMARY.main).fade(0.2).string(),
    lighter: Color(PRIMARY.main).fade(0.35).toString(),
    transparent: Color(PRIMARY.main).fade(0.8).string(),
    white: '#ffffff',
  },
  warning: {
    contrastText: '#fff',
    dark: 'rgba(87,2,2,1)',
    light: 'rgba(176,4,4,1)',
    main: 'rgb(244,243,86)',
  },
};

const overrides = {
  MuiButton: {
    root: {
      border: '2px solid',
      borderRadius: '0 0 0 0',
      boxShadow: 'none',
      fontSize: '.6em',
      fontWeight: 500,
    },
    text: {
      padding: '12px 16px',
    },
  },
  MuiFormControl: {
    root: {
      '& .basic-single': {
        marginTop: '16px',
      },
      marginBottom: '40px',
      width: '100%',
    },
  },
  MuiFormHelperText: {
    root: {
      '&.Mui-error': {
        color: palette.primary.contrastText,
      },
      bottom: '-1.6em',
      fontSize: '.8em',
      fontWeight: 300,
      position: 'absolute',
      textTransform: 'capitalize',
    },
  },
  MuiFormLabel: {
    root: {
      fontSize: '.8em',
      fontWeight: 400,
    },
  },
  MuiInputAdornment: {
    root: {
      position: 'relative',
      right: '6px',
    },
  },
  MuiInputBase: {
    input: {
      color: palette.primary.contrastText,
      height: '1.8em',
      padding: '.6em',
    },
    multiline: {
      padding: '.6em',
    },
    root: {
      '&.Mui-error.Mui-focused.MuiInput-root': {
        border: `1px solid ${palette.error.main}`,
      },
      '&.Mui-error.MuiInput-root': {
        border: `1px solid ${palette.error.main}`,
      },
      '&.Mui-focused.MuiInput-root': {
        border: `1px solid ${palette.primary.contrastText}`,
      },
      '&:hover': {
        border: `1px solid ${palette.primary.dark}`,
      },
      backgroundColor: palette.utils.white,
      border: '1px solid transparent',
    },
  },
  MuiInputLabel: {
    formControl: {
      top: '-6px',
    },
    root: {
      textTransform: 'capitalize',
    },
  },
  MuiStepConnector: {
    vertical: {
      marginLeft: 20,
    },
  },
  MuiStepContent: {
    root: {
      marginLeft: 20,
    },
  },
  MuiStepIcon: {
    root: {
      fontSize: '3.4em',
    },
  },
  MuiStepLabel: {
    label: {
      fontSize: '1.3em',
      fontWeight: 700,
      textDecoration: 'underline',
      textTransform: 'capitalize',
    },
    root: {
      padding: '7px 28px 7px 6px',
    },
  },
};

const typography = {
  body1: {
    fontSize: '1.5rem',
    fontWeight: 300,
  },
  body2: {
    fontSize: '1.6rem',
    fontWeight: 400,
  },
  caption: {
    display: 'inline-block',
    fontSize: '.7rem',
    fontWeight: 500,
    textTransform: 'uppercase',
  },
  h1: {
    fontSize: '3rem',
    fontWeight: 500,
    textTransform: 'capitalize',
  },
  h2: {
    fontSize: '2.8rem',
    fontWeight: 500,
    textTransform: 'capitalize',
  },
  h3: {
    fontSize: '2.2rem',
    fontWeight: 400,
    textTransform: 'capitalize',
  },
  h4: {
    fontSize: '2.1rem',
    fontWeight: 400,
    textTransform: 'capitalize',
  },
  h5: {
    fontSize: '1rem',
    fontWeight: 300,
    textTransform: 'capitalize',
  },
  h6: {
    fontSize: '0.6rem',
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
};

export default {
  overrides,
  palette,
  typography,
};
