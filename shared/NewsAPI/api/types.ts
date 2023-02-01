import { Countries, SearchIn, SortOptions } from './enums';

//region Types
/**
 * Type for general get parameters
 * @param q - search query
 * @param pageSize - number of articles per page
 * @param page - current page index
 */
export type UrlParams = {
  q?: string;
  pageSize?: number;
  page?: number;
};

/**
 * Type for get parameters for headlines endpoint
 * @param q - search query
 * @param pageSize - number of articles per page
 * @param page - current page index
 * @param country - news for which country to search through
 */
export type HeadlineParams = UrlParams & {
  country?: Countries;
};

/**
 * Type for get parameters for everything endpoint
 * @param q - search query
 * @param pageSize - number of articles per page
 * @param page - current page index
 * @param sortBy - sorting strategy
 * @param searchin - part of the article where search query must be present
 * @param fromDate - oldest article release date
 * @param toDate - latest article release date
 */
export type AllParams = UrlParams & {
  sortBy?: SortOptions;
  searchIn?: SearchIn[];
  fromDate?: Date;
  toDate?: Date;
};
//endregion
