import { useEffect, useState } from 'react';

import { useCookies } from 'react-cookie';

import { NewsAPIEndpoints } from '@/shared/NewsAPI';

import { useLocation } from '@/entities/Location';
import { useNewsAPI } from '@/entities/News';
import { useQueryParams } from '@/entities/QueryParams';

import News from '../ui/News';

export const NewsContainer = () => {
  const [queryParams, setQueryParams] = useQueryParams();
  const [endpoint, setEndpoint] = useState(NewsAPIEndpoints.Headlines);
  const country = useLocation();
  const news = useNewsAPI<typeof endpoint>({
    endpoint: endpoint,
    queryParams: { country: country, ...queryParams },
  });

  useEffect(() => {
    if (!!country) {
      setQueryParams({ country: country });
    }
  }, [country]);

  return <News {...news} />;
};

export default NewsContainer;
