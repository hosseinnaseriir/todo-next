import { components, darkPalette, lightPalette, typography } from '@design';
import { createTheme, Theme } from '@mui/material/styles';

export const theme = (mode: 'dark' | 'light' = 'light'): Theme =>
  createTheme({
    direction: 'rtl',
    palette: mode === 'light' ? lightPalette : darkPalette,
    components,
    typography,
  });
