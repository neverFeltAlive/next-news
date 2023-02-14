import { Fragment, ReactElement, useEffect, useState } from 'react';

import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { INewsAPIArticle, NewsAPIEndpoints } from '@/shared/NewsAPI';

import { NewsItem } from './NewsItem';
import {
  ArticleSection,
  ArticleSlide,
  ArticleSwiper,
  ListFooter,
  ListTotalCount,
  TotalCountNumber,
} from './NewsList.styles';
import { IProps } from './NewsList.types';
import NewsItemPopup from './NewsItemPopup';
import { PAGE_SIZE } from '../lib/news.config';

export const NewsList = <T extends NewsAPIEndpoints>({
  articles,
  totalResults,
  hasNextPage,
  hasPreviousPage,
  fetchNextPage,
  fetchPreviousPage,
}: IProps): ReactElement => {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(1);
  const [activeArticle, setActiveArticle] = useState<INewsAPIArticle | null>(
    null
  );
  const offset = PAGE_SIZE / 4;

  /**
   * Возвращает индекс, если он валидный, если нет - максимальное / минимальное ближайшее значение
   * @param index - индекс, который нужно проверить
   */
  const validateIndex = (index: number) =>
    Math.min(Math.max(0, index), articles?.length ?? 0);

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
          spaceBetween={50}
          slidesPerView={3}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={(swiper) =>
            setSwiperActiveIndex(swiper.activeIndex + 1)
          }
        >
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
        </ArticleSwiper>
      </ArticleSection>
      <ListFooter>
        <ListTotalCount>
          Articles Found: <TotalCountNumber>{totalResults}</TotalCountNumber>
        </ListTotalCount>
      </ListFooter>
      <NewsItemPopup
        article={activeArticle}
        closePopup={() => setActiveArticle(null)}
      />
    </>
  );
};
export default NewsList;
