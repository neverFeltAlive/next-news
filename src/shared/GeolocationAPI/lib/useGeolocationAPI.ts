import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import { AxiosResponse } from 'axios';

import { getReverseGeocodeRequest } from '../api/getRequests';
import { GeolocationStatus, ILocations } from './useGeolocationAPI.types';

interface ICoords {
  latitude: number;
  longitude: number;
}

export const useGeolocationAPI = () => {
  const [status, setStatus] = useState<GeolocationStatus>(
    GeolocationStatus.InProgress
  );
  const [coords, setCoords] = useState<ICoords | null>(null);
  const [request, setRequest] = useState<
    (() => Promise<AxiosResponse<ILocations>>) | null
  >(null);

  const {
    status: queryStatus,
    data,
    isLoading,
    error,
  } = useQuery(['location', coords], request || (() => Promise.reject()), {
    enabled: !!request,
  });

  useEffect(() => {
    if (!navigator?.geolocation) {
      setStatus(GeolocationStatus.NotSupported);
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(GeolocationStatus.Success);
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setRequest(() =>
            getReverseGeocodeRequest(
              position.coords.latitude,
              position.coords.longitude
            )
          );
        },
        () => {
          setStatus(GeolocationStatus.Error);
        }
      );
    }
  }, []);

  return {
    status,
    queryStatus,
    isQueryLoading: isLoading,
    queryError: error,
    location: data?.data,
  };
};
