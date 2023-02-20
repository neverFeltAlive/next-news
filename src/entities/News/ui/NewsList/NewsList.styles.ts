import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const ArticleSection = styled.section`
  position: relative;
  overflow: hidden;
`;

export const ArticleSwiper = styled(Swiper)`
  padding: 40px;

  @media (max-width: ${(props) => props.theme.breakPoints.laptopLarge}) {
    padding: 40px 0 15px;
  }
`;

export const SpinnerWrapper = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArticleSlide = styled.div<{
  isActive: boolean;
}>`
  scale: ${(props) => (props.isActive ? 1 : 0.5)};
  transition: scale 0.5s ease-in-out;
`;

export const ListFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ListTotalCount = styled.div`
  color: ${(props) => props.theme.mainColor};
  margin: 0;
  padding: 0 10px 0 0;
  font-size: 16px;
  font-weight: 600;
`;

export const TotalCountNumber = styled.span`
  color: ${(props) => props.theme.accentColor};
`;
