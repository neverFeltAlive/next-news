import { Fragment, ReactElement, useState } from 'react';

import { SwiperSlide } from 'swiper/react';
import { Swiper } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { INewsAPIArticle, NewsAPIEndpoints } from '@/shared/NewsAPI';

import { NewsItem } from '@/entities/News/ui/NewsItem';
import {
  ArticleSection,
  ArticleSlide,
  ArticleSwiper,
} from '@/entities/News/ui/NewsList.styles';
import { IProps } from '@/entities/News/ui/NewsList.types';
import NewsItemPopup from '@/entities/News/ui/NewsItemPopup';

export const NewsList = <T extends NewsAPIEndpoints>({
  articles,
  totalCount,
}: IProps): ReactElement => {
  const [swiper, setSwiper] = useState<Swiper | null>(null);
  const [swiperActiveIndex, setSwiperActiveIndex] = useState(1);
  const [activeArticle, setActiveArticle] = useState<INewsAPIArticle | null>(
    null
  );

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
          {!!articles?.length &&
            articles.map((article, index) => (
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
      <NewsItemPopup
        article={activeArticle}
        closePopup={() => setActiveArticle(null)}
      />
    </>
  );
};
export default NewsList;
