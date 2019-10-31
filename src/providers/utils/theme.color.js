export default function ThemeColor (props, theme) {
  const {
    variant,
  } = props;

  const refs = {
    dark: theme.palette.primary.contrastText,
    dark2: theme.palette.secondary.contrastText,
    light: theme.palette.primary.contrastText,
    light2: theme.palette.secondary.contrastText,
    primary: theme.palette.primary.contrastText,
    secondary: theme.palette.secondary.contrastText,
  };

  return refs[variant] || refs.primary;
}
