import React from 'react';

import { LanguageButton } from '@/shared/Translation';

import { QueryParamsProvider } from '@/entities/QueryParams';

import { ThemeToggle } from '@/features/ThemeToggle';

import { News } from '@/widgets/News';

import {
  Container,
  LanguageContainer,
  ToggleContainer,
  Wrapper,
} from './Home.styles';

export const Home = () => {
  return (
    <QueryParamsProvider>
      <Container>
        <LanguageContainer>
          <LanguageButton />
        </LanguageContainer>
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
