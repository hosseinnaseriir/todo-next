'use client';
import { Theme } from '@design';

export const Gradients = (theme: Theme) => {
  return {
    fade: {
      '100': `linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, ${theme.palette.common.white} 100%)`,
    },
    primary: {
      main: `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`,
    },
  } as const;
};
