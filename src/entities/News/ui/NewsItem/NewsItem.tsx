import { FC } from 'react';

import { AnimatePresence } from 'framer-motion';

import { UICustomImage, UIDate } from '@/shared/UIKit';
import { getMonthFromDate, numberToDateFormat } from '@/shared/UIKit';

import {
  Article,
  ArticleAuthor,
  ArticleBody,
  ArticleDescription,
  ArticleFooter,
  ArticleImage,
  ArticleLink,
  ArticleTitle,
} from './NewsItem.styled';
import { IProps } from './NewsItem.types';

import noImage from '/public/images/no-image.png';

export const NewsItem: FC<IProps> = ({
  author,
  description,
  publishedAt,
  title,
  urlToImage,
  url,
  isFull = false,
}) => {
  const publishedDate = !!publishedAt && new Date(Date.parse(publishedAt));

  return (
    <AnimatePresence>
      <Article isFull={isFull}>
        <>
          {!!title && <ArticleTitle isFull={isFull}>{title}</ArticleTitle>}
          <ArticleBody>
            {!!urlToImage && (
              <ArticleImage>
                <UICustomImage
                  fallbackSrc={noImage}
                  src={urlToImage}
                  alt="Image from the article"
                  width={550}
                  height={300}
                />
              </ArticleImage>
            )}
          </ArticleBody>
          <div>
            {!!description && isFull && (
              <ArticleDescription>{description}</ArticleDescription>
            )}

            {!!url && isFull && (
              <ArticleLink href={url}>Go to source</ArticleLink>
            )}
            <ArticleFooter>
              <ArticleAuthor
                dangerouslySetInnerHTML={{ __html: author || '' }}
              />
              {!!publishedDate && (
                <UIDate
                  year={publishedDate.getFullYear()}
                  month={getMonthFromDate(publishedDate)}
                  day={numberToDateFormat(publishedDate.getDay())}
                />
              )}
            </ArticleFooter>
          </div>
        </>
      </Article>
    </AnimatePresence>
  );
};

export default NewsItem;
