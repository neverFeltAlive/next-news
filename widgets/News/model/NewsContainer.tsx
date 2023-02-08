import {
  NewsAPICountries,
  NewsAPIEndpoints,
  NewsAPISortOptions,
} from '@/shared/NewsAPI';
import NewsList, { useNews } from '@/entities/News';
import { useQueryParams } from '@/entities/QueryParams';
import { NewsSearch } from '@/features/NewsSearch';
import { NewsSelect } from '@/features/NewsSelect';
import { NewsBar, NewsSelects } from '@/widgets/News/ui/UIKit';

export const NewsContainer = () => {
  const [queryParams, setQueryParams] = useQueryParams();
  const { articles, totalResults } = useNews({
    endpoint: NewsAPIEndpoints.Headlines,
    queryParams: { ...queryParams, country: NewsAPICountries.Russia },
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
