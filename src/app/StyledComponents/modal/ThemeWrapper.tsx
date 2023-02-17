import React, { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import { useThemeCookie } from '@/shared/Theme';

import { GlobalStyle } from '../ui/GlobalStyle';
import { IProps } from './ThemeWrapper.types';
import { darkTheme, lightTheme } from './themes';

export const CustomThemeContext = React.createContext({
  isDark: false,
  setIsDark: (isDark: boolean) => {},
});

export const ThemeWrapper: FC<IProps> = ({ children }) => {
  const [isDark, setIsDark] = useThemeCookie();

  return (
    <CustomThemeContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default ThemeWrapper;
