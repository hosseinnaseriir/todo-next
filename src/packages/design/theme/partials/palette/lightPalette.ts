import type { PaletteType } from './types';

export const lightPalette: PaletteType = {
  mode: 'light',
  background: {
    default: '#ffffff',
    paper: '#ffffff',
  },
  text: {
    // Label/Primary/Light
    primary: '#000000',
    // Label/Secondary/Light
    secondary: '#3C3C4399',
    tertiary: '#97A1AF',
    // Secondary-Fill/Light
    disabled: '#78788029',
  },
  line: {
    primary: '#EDF1F8',
    secondary: '#C0CAD8',
    // Label/Tertiary/Light
    tertiary: '#3C3C434D',
  },
  primary: {
    //
    lighter: '#FFF2E0',
    light: '#DEA76A',
    // Tint/Primary/Light
    main: '#A36E3A',
    dark: '#936334 ',
    darker: '#4D2600',
    overlay: '#FFFCF5',
  },
  secondary: {
    // Secondary-Fill/Light
    lighter: '#78788029',
    // Base/Background/Secondary/Light
    light: '#F2F2F7',
    main: '#0C68F4',
    dark: '#343A40',
    darker: '#212529',
    overlay: '#495057',
  },
  success: {
    lighter: '#E5FAEF',
    light: '#8CD9B2',
    main: '#34B273',
    dark: '#008040',
    darker: '#006644',
    overlay: '#EEFCF5',
  },
  error: {
    lighter: '#FFEBEE',
    light: '#E4677C',
    main: '#EB4763',
    dark: '#D22D48',
    darker: '#8F2436',
    overlay: '#FFF5F7',
  },
  warning: {
    lighter: '#FFF2E0',
    light: '#FFC066',
    main: '#FF9500',
    dark: '#FF8C00',
    darker: '#4D2600',
    overlay: '#FFFCF5',
  },
  info: {
    lighter: '#EBFFFD',
    light: '#99FFF6',
    main: '#083D77',
    dark: '#0FB7A9',
    darker: '#10736B',
    overlay: '#FFFFFF',
  },
  common: {
    // Base/Background/Primary/Light
    white: '#FFFFFF',
    // Flat / Black
    black: '#000000',
  },
};
