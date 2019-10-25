export default function ThemeColor (props, theme) {
  const dark = ['light2', 'dark2'];

  return dark.includes(props.variant) ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText;
}
