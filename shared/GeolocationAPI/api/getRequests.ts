import axios from 'axios';

import { ILocations } from '../lib/useGeolocationAPI.types';

const API_KEY = process.env.DADATA_API_KEY;
const API_TOKEN = 'Token ' + API_KEY;
const REVERSE_URL =
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address';

/**
 * Returns a request for location based on coordinates using DaData API
 * @param lat - latitude
 * @param lon - longitude
 */
export const getReverseGeocodeRequest =
  (lat: number, lon: number) => async () =>
    await axios.get<ILocations>(REVERSE_URL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: API_TOKEN,
      },
      params: { lat, lon },
    });
