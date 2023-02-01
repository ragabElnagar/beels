
import { DirectionSettingsContextProvider, LayoutDirection, ThemeConfig } from '@/theme/src';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);
 
  return (
    <>
      {render && (
        <DirectionSettingsContextProvider>
            <ThemeConfig>
              <LayoutDirection>
                <Component {...pageProps} />
              </LayoutDirection>
            </ThemeConfig>
        </DirectionSettingsContextProvider>
      )}
    </>
  );
}

export default App;
