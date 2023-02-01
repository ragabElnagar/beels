import { Components, Theme } from '@mui/material';

export function buildThemeComponents(theme: Theme): Theme {
  const components: Components = {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius:'7px',
          height: '45px',
          fontWeight: 'bold',
          fontSize: '14px',
          '&.Mui-disabled': {
            backgroundColor: theme.palette.primary.main,
            opacity: '50%',
            color: theme.palette.primary.contrastText,
          },
        },
        contained: {
          color: theme.palette.primary.contrastText,
        },
        text: {
          color: theme.palette.primary.main,
        },
      },
    },
  };

  const newTheme: Theme = {
    ...theme,
    components: components,
  };

  return newTheme;
}
