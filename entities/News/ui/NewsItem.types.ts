import { INewsAPIArticle } from '@/shared/NewsAPI';

export interface IProps extends INewsAPIArticle {
  isFull?: boolean;
}
