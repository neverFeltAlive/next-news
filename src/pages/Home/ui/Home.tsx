import React from 'react';

import { QueryParamsProvider } from '@/entities/QueryParams';

import { ThemeToggle } from '@/features/ThemeToggle';

import { News } from '@/widgets/News';

import { Container, ToggleContainer, Wrapper } from './Home.styles';

export const Home = () => {
  return (
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
  );
};
