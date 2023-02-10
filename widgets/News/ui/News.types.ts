import { INewsAPIArticle } from '@/shared/NewsAPI';

export interface IProps {
  totalResults?: number;
  articles?: INewsAPIArticle[];
}
