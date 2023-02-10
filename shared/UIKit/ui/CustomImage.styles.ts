import styled from 'styled-components';

export const Wrapper = styled.div<{ isLoading: boolean }>`
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
`;
