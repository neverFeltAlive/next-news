import { useContext } from 'react';
import { CustomThemeContext } from '@/app/StyledComponents/modal/ThemeWrapper';

export const useTheme = () => {
  const { isDark, setIsDark } = useContext(CustomThemeContext);
  return [isDark, setIsDark] as [boolean, (value: boolean) => void];
};
