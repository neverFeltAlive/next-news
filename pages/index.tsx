import Head from 'next/head';

import { HomePage } from '@/pages/Home';

// TODO: new news notifications

// TODO: ssr
// TODO: test
// TODO: loader
// TODO: date input
// TODO: select search
// TODO: generic search
// TODO: category select
// TODO: declaration files TS

// TODO: check sorting query
// TODO: fallback for errored images
// TODO: revisit lazy load news pages
// TODO: close select on outside click
// TODO: cookie / localStorage / sessionStorage
// TODO: animation (https://www.framer.com/motion/)

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
        <HomePage />
      </main>
    </>
  );
}
