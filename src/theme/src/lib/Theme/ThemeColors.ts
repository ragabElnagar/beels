import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    SufraceDark: Palette['primary'];
    Paper: Palette['primary'];
    systemYellow: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
  }

  interface PaletteOptions {
    SufraceDark: PaletteOptions['primary'];
    Paper: PaletteOptions['primary'];
    systemYellow: PaletteOptions['primary'];
    gray: PaletteOptions['primary'];
  }
}

export const palette: PaletteOptions = {
  primary: {
    main: '#257DDB',
    contrastText: '#ffffff',
  },
  gray: {
    main: '#F5F5F5',
    contrastText: 'RGBA(60, 60, 67, 0.6)',
  },
  secondary: {
    main: '#FF9F0A',
  },
  error: {
    main: '#AF1A15',
  },
  background: {
    default: '#121212',
  },
  SufraceDark: {
    main: '#121212',
  },
  Paper: {
    main: '#F3F3F3',
  },
  systemYellow: {
    main: '#FFD60A',
  },
};
