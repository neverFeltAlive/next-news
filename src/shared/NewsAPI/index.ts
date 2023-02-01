export {
  Endpoints as NewsAPIEndpoints,
  SearchIn as NewsAPISearchInOptions,
  SortOptions as NewsAPISortOptions,
  Countries as NewsAPICountries,
} from '@/shared/NewsAPI/api/getRequest.types';
export type {
  IAllParams as INewsAPIAllParams,
  IHeadlineParams as INewsAPIHeadlineParams,
  IUrlParams as INewsAPIUrlParams,
  INewsArticle as INewsAPIArticle,
  IResponse as INewsAPIResponse,
} from '@/shared/NewsAPI/api/getRequest.types';
export { getRequest as getNewsAPIRequest } from '@/shared/NewsAPI/api/getRequest';
