import { useState } from 'react';

import { useInfiniteQuery } from 'react-query';

import { getNewsAPIRequest, NewsAPIEndpoints } from '@/shared/NewsAPI';

import { IProps } from './useNews.types';

const PAGE_SIZE = 20;

export const useNews = <T extends NewsAPIEndpoints>({
  endpoint,
  queryParams,
}: IProps<T>) => {
  const request = getNewsAPIRequest<T>(endpoint, queryParams);
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  const {
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    isLoading,
    isFetched,
    ...result
  } = useInfiniteQuery(
    ['news list', endpoint, queryParams],
    ({ pageParam = 0 }) => {
      setCurrentPageIndex(pageParam);
      return request(pageParam, PAGE_SIZE);
    },
    {
      getNextPageParam: (lastPage) =>
        lastPage.totalResults > PAGE_SIZE * (currentPageIndex + 1)
          ? currentPageIndex + 1
          : undefined,
      getPreviousPageParam: () =>
        currentPageIndex > 0 ? currentPageIndex - 1 : undefined,
    }
  );

  return {
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isFetchingPreviousPage,
    isLoading,
    isFetched,
    ...result?.data?.pages[currentPageIndex],
  };
};
