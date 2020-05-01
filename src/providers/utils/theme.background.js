export default function ThemeBackground (props, theme, variation) {
  const {
    variant,
  } = props;

  const refs = {
    dark: {
      dark: theme.palette.primary.primary,
      light: theme.palette.primary.light,
      main: theme.palette.primary.dark,
    },
    dark2: {
      dark: theme.palette.secondary.primary,
      light: theme.palette.secondary.light,
      main: theme.palette.secondary.dark,
    },
    light: {
      dark: theme.palette.primary.dark,
      light: theme.palette.primary.primary,
      main: theme.palette.primary.primary,
    },
    light2: {
      dark: theme.palette.secondary.dark,
      light: theme.palette.secondary.main,
      main: theme.palette.secondary.light,
    },
    primary: {
      dark: theme.palette.primary.dark,
      light: theme.palette.primary.light,
      main: theme.palette.primary.main,
    },
    secondary: {
      dark: theme.palette.secondary.dark,
      light: theme.palette.secondary.light,
      main: theme.palette.secondary.main,
    },
  };

  return (((variant && variation) && refs[variant] && refs[variant][variation]) && refs[variant][variation]) ||
    (variant && refs[variant].main) ||
    refs.primary.main;
}
