import { Direction } from '@mui/material';
import * as React from 'react';
import { ReactNode, createContext, useState } from 'react';

type DirectionSettingsContextProps = {
  themeDirection: Direction;
  onChangeDirectionByLanguage: (lang: string) => void;
};
type DirectionSettingsContextProviderProps = {
  children: ReactNode;
};

const initialState: DirectionSettingsContextProps = {
  themeDirection: 'ltr',
  onChangeDirectionByLanguage: () => {},
};

const DirectionSettingsContext = createContext(initialState);

function DirectionSettingsContextProvider({
  children,
}: DirectionSettingsContextProviderProps) {
  const [themeDirection, setThemeDirection] = useState<Direction>('ltr');
  React.useEffect(() => {
    if (window) {
      setThemeDirection(
        window.localStorage.getItem('i18nextLng') == 'en' ? 'ltr' : 'rtl'
      );
    }
  }, []);

  const onChangeDirectionByLanguage = (lang: string) => {
    setThemeDirection(lang == 'en' ? 'ltr' : 'rtl');
  };

  return (
    <DirectionSettingsContext.Provider
      value={{
        themeDirection,
        onChangeDirectionByLanguage,
      }}
    >
      {children}
    </DirectionSettingsContext.Provider>
  );
}

export { DirectionSettingsContextProvider, DirectionSettingsContext };
