//region Interfaces
/**
 * Type for general get parameters
 * @param q - search query
 */
export interface IUrlParams {
  q?: string;
}

/**
 * Type for get parameters for headlines endpoint
 * @param q - search query
 * @param country - news for which country to search through
 */
export interface IHeadlineParams extends IUrlParams {
  country?: Countries;
}

/**
 * Type for get parameters for everything endpoint
 * @param q - search query
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

//region Enums
export enum Endpoints {
  Headlines = '/top-headlines',
  All = '/everything',
}

export enum SortOptions {
  Relevancy = 'relevancy',
  Popularity = 'popularity',
  PublishedAt = 'publishedAt',
}

export enum SearchIn {
  Title = 'title',
  Description = 'description',
  Content = 'content',
}

export enum Countries {
  Russia = 'ru',
  UnitedStates = 'us',
  Australia = 'au',
  Taiwan = 'tw',
  Ukraine = 'ua',
  Venezuela = 've',
  SouthAfrica = 'sa',
  Türkiye = 'tr',
  Thailand = 'th',
  Slovakia = 'sk',
  Slovenia = 'si',
  Singapore = 'sg',
  Sweden = 'se',
  Serbia = 'rs',
  Romania = 'ro',
  Portugal = 'pt',
  Poland = 'pl',
  Philippines = 'ph',
  NewZealand = 'nz',
  Norway = 'no',
  Netherlands = 'nl',
  Nigeria = 'ng',
  Malaysia = 'my',
  Mexico = 'mx',
  Morocco = 'ma',
  Latvia = 'lv',
  Lithuania = 'lt',
  SouthKorea = 'kr',
  Japan = 'jp',
  Italy = 'it',
  India = 'in',
  Israel = 'il',
  Ireland = 'ie',
  Indonesia = 'id',
  Hungary = 'hu',
  HongKong = 'hk',
  Greece = 'gr',
  UnitedKingdom = 'gb',
  France = 'fr',
  Egypt = 'eg',
  Czechia = 'cz',
  UnitedArabEmirates = 'ae',
  Canada = 'ca',
  China = 'cn',
}
//endregion
