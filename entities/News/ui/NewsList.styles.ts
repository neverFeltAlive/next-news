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
