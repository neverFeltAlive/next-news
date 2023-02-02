import Head from 'next/head';
import {
  getNewsAPIRequest,
  INewsAPIResponse,
  NewsAPICountries,
  NewsAPIEndpoints,
} from '@/shared/NewsAPI';
import { NewsList } from '@/entities/News';
import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

// TODO: declaration files TS

export default function Home() {
  const queryParams = { q: '', country: NewsAPICountries.Russia };

  return (
    <>
      <Head>
        <title>Дзинь</title>
        <meta name="description" content="Новостной портал" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NewsList
          endpoint={NewsAPIEndpoints.Headlines}
          queryParams={queryParams}
        />
      </main>
    </>
  );
}
