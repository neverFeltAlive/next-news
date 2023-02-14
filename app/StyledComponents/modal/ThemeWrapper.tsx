import React, { FC, useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { useCookies } from 'react-cookie';

import { GlobalStyle } from '../ui/GlobalStyle';
import { IProps } from './ThemeWrapper.types';
import { darkTheme, lightTheme } from './themes';

export const CustomThemeContext = React.createContext({
  isDark: false,
  setIsDark: (isDark: boolean) => {},
});

const CookieMap = {
  dark: 'dark',
  light: 'light',
};

export const ThemeWrapper: FC<IProps> = ({ children }) => {
  const [cookie, setCookie] = useCookies(['theme']);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    cookie.theme === CookieMap.dark && setIsDark(true);
  }, []);

  const setIsDarkWrapper = (isDark: boolean) => {
    setIsDark(isDark);
    isDark
      ? setCookie('theme', CookieMap.dark)
      : setCookie('theme', CookieMap.light);
  };

  return (
    <CustomThemeContext.Provider
      value={{ isDark, setIsDark: setIsDarkWrapper }}
    >
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default ThemeWrapper;
