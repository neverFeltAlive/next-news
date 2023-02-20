import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 600px;

  @media (max-width: ${(props) => props.theme.breakPoints.mobileLarge}) {
    max-width: 100%;
  }
`;
