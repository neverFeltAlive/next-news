import Head from 'next/head';

import { News } from '@/widgets/News';
import { QueryParamsProvider } from '@/entities/QueryParams';

// TODO: declaration files TS
// TODO: NewsDate & NewsSelect - HOC
// TODO: Select & Date - Stupid components for ui only
// TODO: integrate geolocation API
// TODO: pwa
// TODO: revisit architecture
// TODO: ssr
// TODO: test

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
