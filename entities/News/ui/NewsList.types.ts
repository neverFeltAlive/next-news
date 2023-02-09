import { INewsAPIArticle } from '@/shared/NewsAPI';

export interface IProps {
  articles?: INewsAPIArticle[];
  totalCount?: number;
}
