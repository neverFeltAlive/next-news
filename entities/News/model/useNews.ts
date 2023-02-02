import { useQuery } from 'react-query';
import { getNewsAPIRequest, NewsAPIEndpoints } from '@/shared/NewsAPI';
import { IProps } from '@/entities/News/model/types';

export const useNews = <T extends NewsAPIEndpoints>({
  endpoint,
  queryParams,
}: IProps<T>) => {
  const request = getNewsAPIRequest<T>(endpoint, queryParams);
  const { data: response } = useQuery(
    ['news list', endpoint, queryParams],
    request,
    {
      suspense: true,
    }
  );

  return { ...response?.data };
};
