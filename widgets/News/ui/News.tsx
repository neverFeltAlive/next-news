import { FC } from 'react';

import { NewsAPICountries, NewsAPISortOptions } from '@/shared/NewsAPI';

import { NewsList, INewsListProps } from '@/entities/News';

import { NewsSearch } from '@/features/NewsSearch';
import { NewsSelect } from '@/features/NewsSelect';

import { NewsBar, NewsSelects } from '../ui/News.styles';

const News: FC<INewsListProps> = (props) => {
  return (
    <>
      <NewsBar>
        <NewsSearch />
        <NewsSelects>
          <NewsSelect<'sortBy'> options={NewsAPISortOptions} />
          <NewsSelect<'country'> options={NewsAPICountries} />
        </NewsSelects>
      </NewsBar>
      <NewsList {...props} />
    </>
  );
};

export default News;
