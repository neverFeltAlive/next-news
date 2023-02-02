import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const useTheme = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return [isDark, setIsDark];
};
