import styled from 'styled-components';

export const StyledDate = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.accentColor};
  padding: 10px 0 0;
  margin: 0;
`;
export const DateElement = styled.span``;
export const DateYear = styled(DateElement)``;
export const DateMonth = styled(DateElement)``;
export const DateDay = styled(DateElement)``;
