import Head from 'next/head';

import { News } from '@/widgets/News';
import { QueryParamsProvider } from '@/entities/QueryParams';

// TODO: declaration files TS
// TODO: integrate geolocation API
// TODO: pwa
// TODO: ssr
// TODO: test
// TODO: close select on outside click
// TODO: loader
// TODO: animation (https://www.framer.com/motion/)
// TODO: lazy load news pages
// TODO: fallback for loading images
// TODO: fallback for errored images
// TODO: check sorting query

export default function Home() {
  return (
    <>
      <Head>
        <title>Дзинь</title>
        <meta name="description" content="Новостной портал" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <QueryParamsProvider>
          <News />
        </QueryParamsProvider>
      </main>
    </>
  );
}
