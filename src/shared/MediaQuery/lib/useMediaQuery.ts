import { useEffect, useState } from 'react';

import { QueryTypes } from './useMediaQuery.types';

export const useMediaQuery = (query: string, type: QueryTypes) => {
  const [mediaQuery, setMediaQuery] = useState<MediaQueryList | null>(null);
  const [matches, setMatches] = useState(mediaQuery?.matches);

  useEffect(() => {
    const listener = () => mediaQuery && setMatches(mediaQuery.matches);

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [mediaQuery, query]);

  useEffect(() => {
    const mediaObj = window.matchMedia(
      `(${type === QueryTypes.max ? 'max-width' : 'min-width'}: ${query})`
    );

    setMediaQuery(mediaObj);
    setMatches(mediaObj.matches);
  }, [query]);

  return matches;
};
