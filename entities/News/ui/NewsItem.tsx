import { FC } from 'react';

import { INewsAPIArticle } from '@/shared/NewsAPI';
import { UICustomImage, UIDate } from '@/shared/UIKit';
import { getMonthFromDate, numberToDateFormat } from '@/shared/UIKit';

import {
  Article,
  ArticleAuthor,
  ArticleBody,
  ArticleDescription,
  ArticleFooter,
  ArticleImage,
  ArticleTitle,
} from '@/entities/News/ui/NewsItem.styled';

export const NewsItem: FC<INewsAPIArticle> = ({
  author,
  description,
  publishedAt,
  title,
  urlToImage,
  url,
}) => {
  const publishedDate = !!publishedAt && new Date(Date.parse(publishedAt));

  return (
    <Article>
      <>
        {!!title && <ArticleTitle>{title}</ArticleTitle>}
        <ArticleBody>
          {!!urlToImage && (
            <ArticleImage>
              <UICustomImage
                src={urlToImage}
                alt="Image from the article"
                width={550}
                height={500}
              />
            </ArticleImage>
          )}
          {!!description && (
            <ArticleDescription>{description}</ArticleDescription>
          )}
        </ArticleBody>
        <ArticleFooter>
          <ArticleAuthor>{author || ''}</ArticleAuthor>
          {!!publishedDate && (
            <UIDate
              year={publishedDate.getFullYear()}
              month={getMonthFromDate(publishedDate)}
              day={numberToDateFormat(publishedDate.getDay())}
            />
          )}
        </ArticleFooter>
      </>
    </Article>
  );
};

export default NewsItem;
