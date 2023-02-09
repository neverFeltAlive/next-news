import React, { FC, ReactNode, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import { darkTheme, lightTheme } from '@/app/StyledComponents/modal/themes';
import { GlobalStyle } from '@/app/StyledComponents/ui/GlobalStyle';
import { IProps } from '@/app/StyledComponents/modal/ThemeWrapper.types';

const ThemeContext = React.createContext({
  isDark: false,
  setIsDark: (isDark: boolean) => {},
});

export const ThemeWrapper: FC<IProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeWrapper;
