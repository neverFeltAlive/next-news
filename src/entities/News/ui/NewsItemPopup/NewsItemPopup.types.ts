import { INewsAPIArticle } from '@/shared/NewsAPI';

export interface IProps {
  article: INewsAPIArticle | null;
  closePopup: () => void;
}
