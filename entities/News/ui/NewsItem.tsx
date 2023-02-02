import { FC } from 'react';
import { INewsAPIArticle } from '@/shared/NewsAPI';
import { Article } from '@/entities/News/ui/UIKit';
export const NewsItem: FC<INewsAPIArticle> = ({
  author,
  description,
  publishedAt,
  title,
  urlToImage,
  url,
}) => {
  return (
    <Article>
      <>
        {!!title && <h3>{title}</h3>}
        {!!description && <h5>{description}</h5>}
      </>
    </Article>
  );
};

export default NewsItem;
