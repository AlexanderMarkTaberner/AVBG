'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    primary: {
      main: process.env.NEXT_PUBLIC_PRIMARY_COLOUR_LIGHT!,
      dark: process.env.NEXT_PUBLIC_PRIMARY_COLOUR_DARK!,
    },
    secondary: {
      main: process.env.NEXT_PUBLIC_SECONDARY_COLOUR_LIGHT!,
      dark: process.env.NEXT_PUBLIC_SECONDARY_COLOUR_DARK!,
    },
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
});

export default theme;