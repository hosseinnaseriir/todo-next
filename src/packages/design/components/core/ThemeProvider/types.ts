import type { ReactNode } from 'react';
import { Theme } from '@mui/material';

export interface ThemeProvideProps {
  theme: Theme;
  children: ReactNode;
}
