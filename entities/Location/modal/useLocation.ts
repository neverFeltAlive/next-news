import { useEffect, useState } from 'react';

import {
  getCountryISOFromLocation,
  useGeolocationAPI,
} from '@/shared/GeolocationAPI';
import { NewsAPICountries } from '@/shared/NewsAPI';

export const useLocation = () => {
  const countries = NewsAPICountries;
  const [country, setCountry] = useState<NewsAPICountries>(
    NewsAPICountries.Russia
  );
  const { isQueryLoading, location } = useGeolocationAPI();

  useEffect(() => {
    if (!!location && !isQueryLoading) {
      const countryISO = getCountryISOFromLocation(location);
      const countryKey = Object.keys(countries).find(
        (key) => countries[key as keyof typeof NewsAPICountries] === countryISO
      );

      setCountry(NewsAPICountries[countryKey as keyof typeof NewsAPICountries]);
    }
  }, [location]);

  return country;
};
