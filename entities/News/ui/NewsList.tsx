import { ReactElement, useState } from 'react';

import { Navigation, Pagination } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { IProps } from '@/entities/News/model/types';
import { NewsAPIEndpoints } from '@/shared/NewsAPI';
import { useNews } from '@/entities/News';
import NewsItem from '@/entities/News/ui/NewsItem';
import {
  ArticleSection,
  ArticleSlide,
  ArticleSwiper,
} from '@/entities/News/ui/UIKit';

export const NewsList = <T extends NewsAPIEndpoints>({
  endpoint,
  queryParams,
}: IProps<T>): ReactElement => {
  const { articles, totalResults } = useNews<T>({ endpoint, queryParams });
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  return (
    <ArticleSection>
      <ArticleSwiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex + 1)}
      >
        {!!articles?.length &&
          articles.map((article, index) => (
            <SwiperSlide key={`article_${article.title}`}>
              <ArticleSlide isActive={activeSlideIndex === index}>
                <NewsItem {...article} />
              </ArticleSlide>
            </SwiperSlide>
          ))}
      </ArticleSwiper>
    </ArticleSection>
  );
};

export default NewsList;
