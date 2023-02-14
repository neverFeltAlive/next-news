import {
  FetchNextPageOptions,
  FetchPreviousPageOptions,
  InfiniteQueryObserverResult,
} from 'react-query';

import {
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

export type paramType<T extends NewsAPIEndpoints> =
  T extends NewsAPIEndpoints.All ? INewsAPIAllParams : INewsAPIHeadlineParams;
