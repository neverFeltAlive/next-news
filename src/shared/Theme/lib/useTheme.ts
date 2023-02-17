import { useEffect, useState } from 'react';

import { useCookies } from 'react-cookie';

const CookieMap = {
  dark: 'dark',
  light: 'light',
};

/**
 * Manages theme cookie and checks for the preferred theme
 */
export const useTheme = () => {
  const [cookie, setCookie] = useCookies(['theme']);
  const [isDark, setIsDark] = useState(false);

  const checkIsPreferredThemeDark = () =>
    window && window.matchMedia('(prefers-color-scheme: dark').matches;

  const setTheme = (isDark: boolean) => {
    setIsDark(isDark);
    setThemeCookie(isDark);
  };

  useEffect(() => {
    !cookie.theme
      ? setTheme(checkIsPreferredThemeDark())
      : setTheme(cookie.theme === CookieMap.dark);
  }, []);

  const setThemeCookie = (isDark: boolean) =>
    isDark
      ? setCookie('theme', CookieMap.dark)
      : setCookie('theme', CookieMap.light);

  return [isDark, setTheme] as [boolean, (isDark: boolean) => void];
};
