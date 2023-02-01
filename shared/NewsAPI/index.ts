export {
  Endpoints as NewsAPIEndpoints,
  SearchIn as NewsAPISearchInOptions,
  SortOptions as NewsAPISortOptions,
  Countries as NewsAPICountries,
} from '@/shared/NewsAPI/api/enums';
export type {
  AllParams as NewsAPIAllParams,
  HeadlineParams as NewsAPIHeadlineParams,
  UrlParams as NewsAPIUrlParams,
} from '@/shared/NewsAPI/api/types';
export { getRequest as getNewsAPIRequest } from '@/shared/NewsAPI/api/getRequest';
