import { NewsAPICountries, NewsAPISortOptions } from '@/shared/NewsAPI';

export interface IProps<T extends 'country' | 'sortBy'> {
  options: OptionsType<T>;
}

export type OptionsType<T extends 'country' | 'sortBy'> = T extends 'country'
  ? { [key in keyof typeof NewsAPICountries]: string }
  : { [key in keyof typeof NewsAPISortOptions]: string };
