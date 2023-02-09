import { ILocations } from '@/shared/GeolocationAPI/lib/types';

export const getCountryFromLocation = (location?: ILocations) =>
  location?.suggestions[0].data.country;
export const getCountryISOFromLocation = (location?: ILocations) =>
  location?.suggestions[0].data.country_iso_code.toLowerCase();
