import { ThemeProvider as MuiThemeProvider } from '@mui/material';

import type { ThemeProvideProps } from './types';

export const ThemeProvider = ({ children, theme }: ThemeProvideProps) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
