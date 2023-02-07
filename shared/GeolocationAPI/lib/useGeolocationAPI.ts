import { useEffect, useState } from 'react';

import { useQuery } from 'react-query';

import { GeolocationStatus } from '@/shared/GeolocationAPI/lib/types';
import { getReverseGeocodeRequest } from '@/shared/GeolocationAPI/api/getRequests';
import { AxiosResponse } from 'axios';

interface ICoords {
  latitude: number;
  longitude: number;
}

export const useGeolocationAPI = () => {
  const [status, setStatus] = useState(GeolocationStatus.InProgress);
  const [coords, setCoords] = useState<ICoords | null>(null);
  const [request, setRequest] = useState<(() => Promise<AxiosResponse>) | null>(
    null
  );

  const {
    status: queryStatus,
    data,
    isLoading,
    error,
  } = useQuery(['location', coords], request || (() => Promise.reject()), {
    enabled: !!request,
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus(GeolocationStatus.NotSupported);
    } else {
      setStatus(GeolocationStatus.Success);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setRequest(
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
