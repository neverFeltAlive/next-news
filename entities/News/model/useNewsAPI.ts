import { useState } from 'react';

import { useInfiniteQuery } from 'react-query';

import {
  getNewsAPIRequest,
  INewsAPIArticle,
  NewsAPIEndpoints,
} from '@/shared/NewsAPI';

import { IProps } from './useNewsAPI.types';
import { PAGE_SIZE } from '../lib/news.config';

export const useNewsAPI = <T extends NewsAPIEndpoints>({
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
    ({ pageParam = 1 }) => {
      setCurrentPageIndex(pageParam - 1);
      return request(pageParam, PAGE_SIZE);
    },
    {
      getNextPageParam: (lastPage) =>
        lastPage.totalResults > PAGE_SIZE * (currentPageIndex + 1)
          ? currentPageIndex + 2
          : undefined,
      getPreviousPageParam: () =>
        currentPageIndex > 1 ? currentPageIndex - 1 : undefined,
    }
  );

  const normalizedArticles = result.data?.pages.reduce(
    (accumulator: INewsAPIArticle[], current) => {
      return [...accumulator, ...current.articles];
    },
    []
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
    totalResults: result?.data?.pages[currentPageIndex]?.totalResults,
    articles: normalizedArticles,
  };
};
