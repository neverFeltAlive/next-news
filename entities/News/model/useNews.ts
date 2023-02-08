import { useQuery } from 'react-query';
import {
  getNewsAPIRequest,
  INewsAPIAllParams,
  INewsAPIHeadlineParams,
  INewsAPIResponse,
  NewsAPIEndpoints,
} from '@/shared/NewsAPI';
import { AxiosResponse } from 'axios';

export interface IProps<T extends NewsAPIEndpoints> {
  endpoint: T extends NewsAPIEndpoints.All
    ? NewsAPIEndpoints.All
    : NewsAPIEndpoints.Headlines;
  queryParams: T extends NewsAPIEndpoints.All
    ? INewsAPIAllParams
    : INewsAPIHeadlineParams;
}

export const useNews = <T extends NewsAPIEndpoints>({
  endpoint,
  queryParams,
}: IProps<T>) => {
  const request = getNewsAPIRequest<T>(endpoint, queryParams);
  const { data: response } = useQuery(
    ['news list', endpoint, queryParams],
    request
  );

  return { ...response?.data };
};

/**
 * Adds delay to default request
 * @param request - request to be delayed
 */
const requestWrapper = async (
  request: () => Promise<AxiosResponse<INewsAPIResponse, any>>
) => {
  const response = await request();
  await new Promise((r) => setTimeout(r, 2000));
  return response;
};
