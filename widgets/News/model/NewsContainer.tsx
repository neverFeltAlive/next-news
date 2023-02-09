import { useEffect, useState } from 'react';

import {
  NewsAPICountries,
  NewsAPIEndpoints,
  NewsAPISortOptions,
} from '@/shared/NewsAPI';

import NewsList, { useNews } from '@/entities/News';
import { useQueryParams } from '@/entities/QueryParams';
import { useLocation } from '@/entities/Location';

import { NewsSearch } from '@/features/NewsSearch';
import { NewsSelect } from '@/features/NewsSelect';

import { NewsBar, NewsSelects } from '@/widgets/News/ui/NewsContainer.styles';

export const NewsContainer = () => {
  const [queryParams, setQueryParams] = useQueryParams();
  const [endpoint, setEndpoint] = useState(NewsAPIEndpoints.Headlines);

  const country = useLocation();

  const { articles, totalResults } = useNews<typeof endpoint>({
    endpoint: endpoint,
    queryParams: { country: country, ...queryParams },
  });

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

export default NewsContainer;
