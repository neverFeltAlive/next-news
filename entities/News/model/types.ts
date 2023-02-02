import {
  INewsAPIAllParams,
  INewsAPIHeadlineParams,
  NewsAPIEndpoints,
} from '@/shared/NewsAPI';

export interface IProps<T extends NewsAPIEndpoints> {
  endpoint: T extends NewsAPIEndpoints.All
    ? NewsAPIEndpoints.All
    : NewsAPIEndpoints.Headlines;
  queryParams: T extends NewsAPIEndpoints.All
    ? INewsAPIAllParams
    : INewsAPIHeadlineParams;
}
