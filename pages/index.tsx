import Head from 'next/head';

import styled from 'styled-components';

import { QueryParamsProvider } from '@/entities/QueryParams';

import { ThemeToggle } from '@/features/ThemeToggle';

import { News } from '@/widgets/News';

// TODO: declaration files TS
// TODO: pwa
// TODO: ssr
// TODO: test
// TODO: close select on outside click
// TODO: loader
// TODO: animation (https://www.framer.com/motion/)
// TODO: lazy load news pages
// TODO: new news notifications
// TODO: fallback for errored images
// TODO: check sorting query
// TODO: cookie / local storage / session storage

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: 100px auto auto;
`;

const ToggleContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
`;

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
          <Container>
            <ToggleContainer>
              <ThemeToggle />
            </ToggleContainer>
            <Wrapper>
              <News />
            </Wrapper>
          </Container>
        </QueryParamsProvider>
      </main>
    </>
  );
}
