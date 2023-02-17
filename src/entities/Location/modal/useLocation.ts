import { useEffect, useState } from 'react';

import { useCookies } from 'react-cookie';

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
  const [cookie, setCookie, removeCookie] = useCookies(['country']);

  useEffect(() => {
    if (!!location && !isQueryLoading && !cookie.country) {
      const countryISO = getCountryISOFromLocation(location);
      const countryKey = Object.keys(countries).find(
        (key) => countries[key as keyof typeof NewsAPICountries] === countryISO
      );

      const country =
        NewsAPICountries[countryKey as keyof typeof NewsAPICountries];
      setCountry(country);
      setCookie('country', country);
    }
  }, [location]);

  useEffect(() => {
    cookie.country && setCountry(cookie.country);
  }, []);

  return country;
};
