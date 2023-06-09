import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 50%;

  svg {
    fill: ${(props) => props.theme.mainColor};
  }
`;
