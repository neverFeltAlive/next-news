import Head from 'next/head';
import { useEffect } from 'react';
import {
  getNewsAPIRequest,
  NewsAPIAllParams,
  NewsAPICountries,
  NewsAPIEndpoints,
  NewsAPIHeadlineParams,
  NewsAPISearchInOptions,
} from '@/shared/NewsAPI';
import { validateParams } from '@/shared/NewsAPI/lib/validateParams';

export default function Home() {
  useEffect(() => {
    (async () => {
      const request = getNewsAPIRequest<NewsAPIHeadlineParams>(
        NewsAPIEndpoints.Headlines,
        validateParams<NewsAPIAllParams>(
          'Владимир',
          10,
          1,
          NewsAPICountries.Russia
        )
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
