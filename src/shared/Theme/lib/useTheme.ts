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

  const getExpirationDate = (): Date => {
    let now = new Date();
    return now.getMonth() === 11
      ? new Date(now.getFullYear() + 1, 0, now.getDate())
      : new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
  };

  useEffect(() => {
    !cookie.theme
      ? setTheme(checkIsPreferredThemeDark())
      : setTheme(cookie.theme === CookieMap.dark);
  }, []);

  const setThemeCookie = (isDark: boolean) =>
    isDark
      ? setCookie('theme', CookieMap.dark, { expires: getExpirationDate() })
      : setCookie('theme', CookieMap.light, { expires: getExpirationDate() });

  return [isDark, setTheme] as [boolean, (isDark: boolean) => void];
};
