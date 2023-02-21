import React, { ReactElement, useEffect, useState } from 'react';

import { useTranslation } from 'next-i18next';

import { useTheme } from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/types';

import { ISCTheme } from '@/app/StyledComponents';

import { MediaQueryTypes, useMediaQuery } from '@/shared/MediaQuery';
import { INewsAPIArticle, NewsAPIEndpoints } from '@/shared/NewsAPI';
import { UISpinner } from '@/shared/UIKit';

import { PAGE_SIZE } from '../../lib/news.config';
import { NewsItem } from '../NewsItem/NewsItem';
import NewsItemPopup from '../NewsItemPopup/NewsItemPopup';
import {
  ArticleSection,
  ArticleSlide,
  ArticleSwiper,
  ListFooter,
  ListTotalCount,
  SpinnerWrapper,
  TotalCountNumber,
} from './NewsList.styles';
import { IProps } from './NewsList.types';

export const NewsList = <T extends NewsAPIEndpoints>({
  articles,
  totalResults,
  hasNextPage,
  fetchNextPage,
  isLoading,
}: IProps): ReactElement => {
  const { t: translation } = useTranslation('common');
  const theme = useTheme() as ISCTheme;
  const isSmall = useMediaQuery(theme.breakPoints.laptop, MediaQueryTypes.max);
  const isMedium = useMediaQuery(
    theme.breakPoints.laptopLarge,
    MediaQueryTypes.max
  );

  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(1);
  const [activeArticle, setActiveArticle] = useState<INewsAPIArticle | null>(
    null
  );
  const offset = PAGE_SIZE / 4;
  const articlesToDraw = articles;

  useEffect(() => {
    swiperActiveIndex > Number(articles?.length) - offset &&
      hasNextPage &&
      fetchNextPage &&
      fetchNextPage();
  }, [swiperActiveIndex]);

  const handleArticleClick = (index: number) => {
    if (swiperActiveIndex !== index && !!swiper) {
      setSwiperActiveIndex(index);
      swiper?.slideTo(index - 1);
    } else if (swiperActiveIndex === index && articles) {
      setActiveArticle(articles[index]);
    }
  };

  return (
    <>
      <ArticleSection>
        <ArticleSwiper
          spaceBetween={isMedium ? 20 : 50}
          slidesPerView={isSmall ? 1 : 3}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={(swiper) =>
            setSwiperActiveIndex(
              isSmall ? swiper.activeIndex : swiper.activeIndex + 1
            )
          }
        >
          {isLoading ? (
            <SpinnerWrapper>
              <UISpinner />
            </SpinnerWrapper>
          ) : (
            <>
              {!!articlesToDraw?.length &&
                articlesToDraw.map((article, index) => (
                  <SwiperSlide
                    key={`article_${article.title}`}
                    onClick={() => handleArticleClick(index)}
                  >
                    <ArticleSlide isActive={swiperActiveIndex === index}>
                      <NewsItem {...article} />
                    </ArticleSlide>
                  </SwiperSlide>
                ))}
            </>
          )}
        </ArticleSwiper>
      </ArticleSection>
      {!!articlesToDraw?.length && (
        <>
          <ListFooter>
            <ListTotalCount>
              {translation('articlesFound')}:{' '}
              <TotalCountNumber>{totalResults}</TotalCountNumber>
            </ListTotalCount>
          </ListFooter>
          <NewsItemPopup
            article={activeArticle}
            closePopup={() => setActiveArticle(null)}
          />
        </>
      )}
    </>
  );
};
export default NewsList;
