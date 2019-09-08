
// TODO: dynamic injection
import SkinAuto from './auto';
import SkinDefault from './default';
import SkinGroupBenefits from './group';
import SkinHealth from './health';

const MUIStyles = (palette, cb) => {
  const styles = {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: 'transparent',
      },
    },
    MuiAvatar: {
      colorDefault: {
        backgroundColor: 'white',
      },
      root: {
        borderColor: `${palette.primary.light}`,
      },
    },
    MuiBackdrop: {
      invisible: {},
    },
    MuiButton: {
      label: {
        textTransform: 'uppercase',
      },
      root: {
        '&$disabled': {
          backgroundColor: palette.disabled.main,
          borderColor: palette.disabled.light,
          color: palette.disabled.contrastText,
        },
        '&:active': {
          boxShadow: 0,
        },
      },
    },
    MuiCardContent: {
      root: {
        cursor: 'auto',
      },
    },
    MuiDivider: {
      root: {
        margin: '16px 0',
      },
    },
    MuiFormControl: {
      root: {
        '& div[class*="error"]': {
          borderColor: palette.error.main,
        },
        marginTop: 16,
      },
    },
    MuiFormLabel: {
      root: {
        '&$focused': {
          color: palette.primary.contrastText,
        },
        fontSize: '1.2rem',
      },
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottom: 0,
        },
        '&:before': {
          borderBottom: 0,
        },
        '&:hover:': {
          '&:after': {
            borderBottom: '0 !important',
          },
          '&:before': {
            borderBottom: '0 !important',
          },
        },
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
        padding: '.875rem 1rem',
      },
      inputMultiline: {
        maxHeight: '60px',
        minHeight: '60px',
        overflow: 'scroll-y',
        padding: '6px',
      },
      root: {
        marginTop: '0!important',
      },
    },
    MuiInputLabel: {
      animated: {
        color: 'rgb(0,0,0)',
      },
      formControl: {
        fontSize: 18,
        fontWeight: 500,
        left: 0,
        textTransform: 'capitalize',
        top: -24,
      },
    },
    MuiList: {
      padding: {
        paddingBottom: 0,
        paddingTop: 0,
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: 'white',
        },
      },
    },
    MuiMenu: {
      paper: {
        border: `1px solid ${palette.utils.highlight}`,
        borderRadius: '0 0 0 0',
      },
    },
    MuiPaper: {
      elevation2: {
        boxShadow: 'initial',
      },
      rounded: {
        borderRadius: '0 0 0 0',
      },
    },
    MuiPrivateTabIndicator: {
      colorPrimary: {
        display: 'none',
      },
    },
    MuiSelect: {
      select: {
        '&:focus': {
          background: 'initial!important',
        },
      },
    },
    MuiStepLabel: {
      label: {
        fontSize: '.9em',
        fontWeight: 700,
        textTransform: 'uppercase',
      },
    },
    MuiTouchRipple: {},
  };

  cb(styles);
};

// map state to props
export default function SkinProvider (name) {
  let skin;
  let global;

  switch (name) {
  case 'auto':
    skin = SkinAuto;
    break;
  case 'health':
    skin = SkinHealth;
    break;
  case 'group':
    skin = SkinGroupBenefits;
    break;
  default:
    skin = SkinDefault;
  }

  MUIStyles(skin.palette, (overrides) => {
    if (overrides) {
      global = {
        ...skin,
        overrides,
      };
    }
  });

  return global;
}
