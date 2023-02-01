import styled from 'styled-components';

export const Wrapper = styled.div<{ isLoading: boolean }>`
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
`;

export const LoaderWrapper = styled.div`
  position: absolute;
`;
