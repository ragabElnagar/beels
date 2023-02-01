import {
  createTheme,
  responsiveFontSizes,
  ThemeOptions,
  ThemeProvider,
} from '@mui/material';
import { palette } from './ThemeColors';
import { typography } from './ThemeTypography';
import { buildThemeComponents } from './ThemeComponents';
import { ReactNode, useMemo } from 'react';
import { useDirectionSettings } from '../settings-context/useSettings';
import * as React from 'react';

export function ThemeConfig({ children }: { children: ReactNode }) {
  const { themeDirection } = useDirectionSettings();

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette,
      typography,
      direction: themeDirection,
    }),
    [themeDirection]
  );

  let theme = createTheme(themeOptions);
  theme = responsiveFontSizes(theme);
  theme = buildThemeComponents(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
