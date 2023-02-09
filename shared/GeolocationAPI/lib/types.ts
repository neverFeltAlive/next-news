export enum GeolocationStatus {
  NotSupported = 'Geolocation is not supported in your browser',
  Error = 'Unable to retrieve location',
  Success = 'Geolocation retrieved successfully',
  InProgress = 'Retrieving Location',
}

export interface ILocations {
  suggestions: ILocation[];
}
export interface ILocationData {
  city: string;
  postalCode: string;
  country: string;
  country_iso_code: string;
  city_type_full: string;
  city_with_type: string;
  geo_lat: string;
  geo_lon: string;
  region: string;
  region_fias_id: string;
  region_iso_code: string;
  region_kladr_id: string;
  region_type: string;
  region_type_full: string;
  region_with_type: string;
}
export interface ILocation {
  data: ILocationData;
  unrestricted_value: string;
  value: string;
}
