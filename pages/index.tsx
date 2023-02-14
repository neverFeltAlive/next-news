import Head from 'next/head';

import styled from 'styled-components';

import { QueryParamsProvider } from '@/entities/QueryParams';

import { ThemeToggle } from '@/features/ThemeToggle';

import { News } from '@/widgets/News';

// TODO: pwa
// TODO: new news notifications

// TODO: ssr
// TODO: test
// TODO: loader
// TODO: select search
// TODO: generic search
// TODO: mobile version
// TODO: category select
// TODO: declaration files TS

// TODO: check sorting query
// TODO: fallback for errored images
// TODO: revisit lazy load news pages
// TODO: close select on outside click
// TODO: cookie / localStorage / sessionStorage
// TODO: animation (https://www.framer.com/motion/)

//region Styled
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
//endregion

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
