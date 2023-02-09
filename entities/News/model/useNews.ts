import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';

import {
  getNewsAPIRequest,
  INewsAPIAllParams,
  INewsAPIHeadlineParams,
  INewsAPIResponse,
  NewsAPIEndpoints,
} from '@/shared/NewsAPI';

export interface IProps<T extends NewsAPIEndpoints> {
  endpoint: T extends NewsAPIEndpoints.All
    ? NewsAPIEndpoints.All
    : NewsAPIEndpoints.Headlines;
  queryParams: paramType<T>;
}

type paramType<T extends NewsAPIEndpoints> = T extends NewsAPIEndpoints.All
  ? INewsAPIAllParams
  : INewsAPIHeadlineParams;

export const useNews = <T extends NewsAPIEndpoints>({
  endpoint,
  queryParams,
}: IProps<T>) => {
  const request = getNewsAPIRequest<T>(endpoint, queryParams as paramType<T>);
  const { data: response } = useQuery(
    ['news list', endpoint, queryParams],
    request
  );

  return { ...response?.data };
};
