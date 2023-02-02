import Head from 'next/head';
import { useEffect } from 'react';
import {
  getNewsAPIRequest,
  NewsAPICountries,
  NewsAPIEndpoints,
  NewsAPIHeadlineParams,
} from '@/shared/NewsAPI';

// TODO: declaration files TS

export default function Home() {
  useEffect(() => {
    (async () => {
      const request = getNewsAPIRequest<NewsAPIHeadlineParams>(
        NewsAPIEndpoints.Headlines,
        { q: 'Владимир', country: NewsAPICountries.Russia }
      );
      const result = await request();
      console.log(result);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Дзинь</title>
        <meta name="description" content="Новостной портал" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>
    </>
  );
}
