import { useEffect, useState } from 'react';

import { NewsAPIEndpoints } from '@/shared/NewsAPI';

import { useNews } from '@/entities/News';
import { useQueryParams } from '@/entities/QueryParams';
import { useLocation } from '@/entities/Location';

import News from '@/widgets/News/ui/News';

export const NewsContainer = () => {
  const [queryParams, setQueryParams] = useQueryParams();
  const [endpoint, setEndpoint] = useState(NewsAPIEndpoints.Headlines);
  const country = useLocation();
  const { articles, totalResults } = useNews<typeof endpoint>({
    endpoint: endpoint,
    queryParams: { country: country, ...queryParams },
  });

  useEffect(() => {
    if (!!country) {
      setQueryParams({ country: country });
    }
  }, [country]);

  return <News articles={articles} totalResults={totalResults} />;
};

export default NewsContainer;
