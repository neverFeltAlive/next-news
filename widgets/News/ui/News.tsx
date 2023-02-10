import { FC } from 'react';

import { NewsAPICountries, NewsAPISortOptions } from '@/shared/NewsAPI';

import NewsList from '@/entities/News';

import { NewsSearch } from '@/features/NewsSearch';
import { NewsSelect } from '@/features/NewsSelect';

import { NewsBar, NewsSelects } from '@/widgets/News/ui/News.styles';
import { IProps } from '@/widgets/News/ui/News.types';

const News: FC<IProps> = ({ articles, totalResults }) => {
  return (
    <>
      <NewsBar>
        <NewsSearch />
        <NewsSelects>
          <NewsSelect<'sortBy'> options={NewsAPISortOptions} />
          <NewsSelect<'country'> options={NewsAPICountries} />
        </NewsSelects>
      </NewsBar>
      <NewsList articles={articles} totalCount={totalResults} />
    </>
  );
};

export default News;
