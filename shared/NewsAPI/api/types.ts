import { Countries, SearchIn, SortOptions } from './enums';

//region Interfaces
/**
 * Type for general get parameters
 * @param q - search query
 * @param pageSize - number of articles per page
 * @param page - current page index
 */
export interface IUrlParams {
  q: string;
  pageSize?: number;
  page?: number;
}

/**
 * Type for get parameters for headlines endpoint
 * @param q - search query
 * @param pageSize - number of articles per page
 * @param page - current page index
 * @param country - news for which country to search through
 */
export interface IHeadlineParams extends IUrlParams {
  country?: Countries;
}

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
export interface IAllParams extends IUrlParams {
  sortBy?: SortOptions;
  searchIn?: SearchIn[];
  fromDate?: Date;
  toDate?: Date;
}

export interface INewsArticle {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string | null;
  source: {
    id: null | number;
    name: string | null;
  } | null;
  title: string;
  url: string;
  urlToImage: string | null;
}

export interface IResponse {
  articles: INewsArticle[] | [];
  status: string;
  totalResults: number;
}
//endregion
