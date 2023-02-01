import { useTheme } from '@mui/material';
import * as React from 'react';
import { StyleSheetManager } from 'styled-components';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

interface LayoutDirectionProps {
  children: JSX.Element;
}
export function LayoutDirection({ children }: LayoutDirectionProps) {
  const theme = useTheme();
  React.useEffect(() => {
    document.dir = 'ltr';
  }, [theme.direction]);

  const cacheRtl = createCache({
    key: theme.direction === 'rtl' ? 'rtl' : 'css',
    stylisPlugins: theme.direction === 'rtl' ? [rtlPlugin] : [],
  });

  return (
    <CacheProvider value={cacheRtl}>
      <StyleSheetManager stylisPlugins={[rtlPlugin]}>
        {children}
      </StyleSheetManager>
    </CacheProvider>
  );
}
