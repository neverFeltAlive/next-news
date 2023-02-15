import { useTheme } from '@/app/StyledComponents';

import { UIThemeToggle } from '@/shared/UIKit';

export const Toggle = () => {
  const [isDark, setIsDark] = useTheme();
  return (
    <UIThemeToggle value={isDark} toggleValue={() => setIsDark(!isDark)} />
  );
};

export default Toggle;
