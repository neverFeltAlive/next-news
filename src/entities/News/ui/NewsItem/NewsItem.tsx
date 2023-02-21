import { FC } from 'react';

import { useTranslation } from 'next-i18next';

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
  const { t: translation } = useTranslation('common');

  const capitalize = (str: string) =>
    str
      .split(' ')
      .map((item, index) =>
        index === 0 ? item[0].toUpperCase() + item.slice(1) : item
      )
      .join(' ');

  return (
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
            <ArticleLink href={url}>
              {capitalize(translation('toSource') as string)}
            </ArticleLink>
          )}
          <ArticleFooter>
            <ArticleAuthor dangerouslySetInnerHTML={{ __html: author || '' }} />
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
  );
};

export default NewsItem;
