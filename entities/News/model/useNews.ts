import { useQuery } from 'react-query';
import { getNewsAPIRequest, NewsAPIEndpoints } from '@/shared/NewsAPI';
import { IProps } from '@/entities/News/model/types';
import { AxiosResponse } from 'axios';
import { IResponse } from '@/shared/NewsAPI/api/types';

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
  request: () => Promise<AxiosResponse<IResponse, any>>
) => {
  const response = await request();
  await new Promise((r) => setTimeout(r, 2000));
  return response;
};
