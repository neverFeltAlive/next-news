import { INewsAPIArticle, INewsAPIResponse } from '@/shared/NewsAPI';
import {
  FetchNextPageOptions,
  FetchPreviousPageOptions,
  InfiniteQueryObserverResult,
} from 'react-query';

export interface IProps {
  totalResults?: number;
  articles?: INewsAPIArticle[];
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<INewsAPIResponse, unknown>>;
  fetchPreviousPage: (
    options?: FetchPreviousPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<INewsAPIResponse, unknown>>;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  isFetchingNextPage?: boolean;
  isFetchingPreviousPage?: boolean;
  isLoading?: boolean;
  isFetched?: boolean;
}
