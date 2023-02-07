import { NewsAPICountries, NewsAPIEndpoints } from '@/shared/NewsAPI';
import NewsList, { useNews } from '@/entities/News';
import { useQueryParams } from '@/entities/QueryParams';
import { NewsSearch } from '@/features/NewsSearch';

export const NewsContainer = () => {
  const [queryParams, setQueryParams] = useQueryParams();
  const { articles, totalResults } = useNews({
    endpoint: NewsAPIEndpoints.Headlines,
    queryParams: { ...queryParams, country: NewsAPICountries.Russia },
  });

  return (
    <>
      <NewsSearch />
      <NewsList articles={articles} totalCount={totalResults} />
    </>
  );
};

export default NewsContainer;
