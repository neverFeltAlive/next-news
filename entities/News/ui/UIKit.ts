import styled from 'styled-components';

import { Swiper } from 'swiper/react';

export const ArticleSection = styled.section`
  position: relative;
  overflow: hidden;
`;

export const ArticleSwiper = styled(Swiper)`
  padding: 40px;
`;

export const ArticleSlide = styled.div<{
  isActive: boolean;
}>`
  scale: ${(props) => (props.isActive ? 1 : 0.5)};
  transition: scale 0.5s ease-in-out;
`;

export const Article = styled.article`
  background-color: ${(props) => props.theme.lightColor};
  border: 2px solid ${(props) => props.theme.shadowColor};
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  padding: 15px;
  color: ${(props) => props.theme.mainColor};
  transition: all 0.3s ease-in-out;
  height: 500px;

  &:hover {
    background-color: ${(props) => props.theme.shadowColor};
  }
`;

export const ArticleTitle = styled.h3``;

export const ArticleDescription = styled.h5``;
