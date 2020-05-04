import Color from 'color';

const PRIMARY = {
  contrastText: 'rgba(0,0,0,1)',
  dark: 'rgba(151,153,154,0.9)',
  light: 'rgba(255,255,255,0.9)',
  main: 'rgba(245,245,245,0.9)',
};

const SECONDARY = {
  contrastText: 'rgba(255,255,255,1)',
  dark: 'rgba(0,0,0,0.9)',
  light: 'rgba(72,72,72,0.9)',
  main: 'rgba(33,33,33,0.9)',
};

const fontFamily = 'Poppins!important';

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
    highlight: 'rgba(0,0,0,0.2)',
    input: '#f7f7f7',
    light: Color(PRIMARY.main).fade(0.2).string(),
    lighter: Color(PRIMARY.main).fade(0.35).toString(),
    transparent: Color(PRIMARY.dark).fade(0.8).string(),
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
      border: '1px solid',
      borderColor: 'transparent',
      borderRadius: '0 0 0 0',
      boxShadow: 'none',
      fontFamily,
      fontSize: '.7em',
      fontWeight: 600,
      textTransform: 'uppercase',
    },
    text: {
      padding: '8px 16px',
    },
  },
  MuiCard: {
    root: {
      borderRadius: '0 0 0 0',
    },
  },
  MuiCardActions: {
    root: {},
  },
  MuiCardHeader: {
    avatar: {
      zIndex: 2,
    },
    content: {
      zIndex: 2,
    },
    root: {
      padding: 0,
    },
    title: {
      fontSize: '1em',
      fontWeight: 500,
      margin: '6px 10px',
      textAlign: 'left',
      textTransform: 'capitalize',
    },
  },
  MuiChip: {
    root: {
      borderRadius: '0 0 0 0',
      margin: 0,
      padding: 0,
    },
  },
  MuiDialogActions: {
    root: {
      '& *': {
        color: PRIMARY.contrastText,
      },
      background: PRIMARY.dark,
    },
  },
  MuiDivider: {
    middle: {
      margin: '30px 0',
      marginLeft: 0,
      marginRight: 0,
      padding: 0,
    },
  },
  MuiFab: {
    root: {
      border: '0 solid',
      boxShadow: 'initial',
      height: '40px',
      minHeight: 'initial',
      width: '40px',
    },
  },
  MuiFormControl: {
    root: {
      '& .basic-single': {
        marginTop: '16px',
      },
      width: '100%',
    },
  },
  MuiFormHelperText: {
    root: {
      '&.Mui-error': {
        color: PRIMARY.contrastText,
      },
      bottom: '-1.6em',
      fontSize: '.5em',
      fontWeight: 300,
      position: 'absolute',
      textTransform: 'capitalize',
    },
  },
  MuiFormLabel: {
    root: {
      '&$focused': {
        color: palette.utils.highlight,
      },
      fontSize: '.8em',
      fontWeight: 300,
    },
  },
  MuiIconButton: {
    root: {
      padding: '0',
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
      color: PRIMARY.contrastText,
      fontSize: '1rem',
      fontWeight: 400,
      height: '1.8em',
      padding: '8px',
    },
    multiline: {
      padding: '10px',
    },
    root: {
      '&.Mui-error.Mui-focused.MuiInput-root': {
        border: `1px solid ${PRIMARY.dark}`,
      },
      '&.Mui-error.MuiInput-root': {
        border: `1px solid ${palette.error.main}`,
      },
      '&.Mui-focused.MuiInput-root': {
        border: `2px solid ${palette.utils.highlight}`,
      },
      '&:hover': {
        borderColor: palette.utils.highlight,
      },
      backgroundColor: `${PRIMARY.light}`,
      border: `2px solid ${PRIMARY.main}`,
    },
  },
  MuiInputLabel: {
    formControl: {
      fontWeight: 800,
    },
    root: {
      textTransform: 'capitalize',
    },
  },
  MuiLink: {
    root: {
      borderBottom: '0 solid transparent',
      fontSize: '1rem',
      fontWeight: 400,
      textTransform: 'capitalize',
    },
    underlineHover: {
      '&:hover *, &:hover': {
        fontWeight: 500,
      },
    },
  },
  MuiListItem: {},
  MuiMobileStepper: {
    dotActive: {
      backgroundColor: PRIMARY.contrastText,
    },
  },
  MuiPaper: {
    root: {
      '& *[class="react-parallax-bgimage"]': {
        zIndex: -1,
      },
      backgroundColor: 'transparent',
      borderRadius: '0 0 0 0',
    },
  },
  MuiPickersCalendarHeader: {
    transitionContainer: {
      overflow: 'visible',
      textTransform: 'capitalize',
    },
  },
  MuiPickersClockPointer: {
    pin: {
      backgroundColor: `${PRIMARY.contrastText}!important`,
    },
    pointer: {
      backgroundColor: `${PRIMARY.contrastText}!important`,
    },
    thumb: {
      backgroundColor: `${PRIMARY.contrastText}!important`,
    },
  },
  MuiPickersModal: {
    dialogRoot: {
      background: PRIMARY.main,
    },
  },
  MuiPickersYear: {
    yearSelected: {
      color: PRIMARY.contrastText,
      fontSize: '1.4em',
    },
  },
  MuiStepConnector: {
    lineVertical: {
      display: 'none',
    },
    vertical: {
      display: 'none',
      marginLeft: 0,
    },
  },
  MuiStepContent: {
    root: {
      backgroundColor: 'transparent',
      borderLeft: '0 solid transparent',
      marginLeft: 0,
      marginTop: 0,
      paddingBottom: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 0,
    },
  },
  MuiStepIcon: {
    active: {
      color: PRIMARY.light,
      fill: PRIMARY.contrastText,
    },
    completed: {
      fill: palette.success.main,
    },
    text: {
      fill: PRIMARY.light,
    },
  },
  MuiStepLabel: {
    active: {
      fontWeight: 700,
    },
    label: {
      fontSize: '16px',
      fontWeight: 500,
      textTransform: 'capitalize',
    },
    root: {
      border: '1px solid transparent',
      padding: '16px',
    },
  },
  MuiStepper: {
    root: {
      background: 'transparent',
      padding: 0,
    },
  },
  MuiTypography: {
    root: {
      fontFamily,
      lineHeight: 'normal!important',
    },
  },
};

const typography = {
  body1: {
    fontSize: '1.2em',
    fontWeight: 400,
    textTransform: 'initial',
  },
  body2: {
    fontSize: '1.2em',
    fontWeight: 500,
    textTransform: 'initial',
  },
  caption: {
    display: 'inline-block',
    fontSize: '.7em',
    fontWeight: 500,
    lineHeight: 'normal',
    textTransform: 'initial',
  },
  h1: {
    fontSize: '2.2rem',
    fontWeight: 600,
    textTransform: 'initial',
  },
  h2: {
    fontSize: '2.2rem',
    fontWeight: 600,
    textTransform: 'initial',
  },
  h3: {
    fontSize: '1.8rem',
    fontWeight: 600,
    textTransform: 'capitalize',
  },
  h4: {
    fontSize: '1.2rem',
    fontWeight: 300,
  },
  h5: {
    fontSize: '1rem',
    fontWeight: 300,
    textTransform: 'initial',
  },
  h6: {
    fontSize: '.9rem',
    fontWeight: 300,
  },
  overline: {
    fontSize: '1rem',
    fontWeight: 300,
  },
  subtitle1: {
    fontSize: '1.4rem',
    fontWeight: 300,
    textTransform: 'initial',
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
