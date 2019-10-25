export default function ThemeBackground (props, theme) {
  const {
    variant,
  } = props;

  const secondary = {
    dark: 'dark2',
    light: 'light2',
    main: 'secondary',
  };

  let color = null;

  if (variant === 'primary') {
    color = theme.palette.primary.main;
  } else if (variant === 'secondary') {
    color = theme.palette.secondary.main;
  } else if (variant === 'light') {
    color = theme.palette.primary.light;
  } else if (variant === 'dark') {
    color = theme.palette.primary.dark;
  } else if (variant === secondary.main) {
    color = theme.palette.secondary.main;
  } else if (variant === secondary.light) {
    color = theme.palette.secondary.light;
  } else {
    color = theme.palette.secondary.dark;
  }

  return color;
}
