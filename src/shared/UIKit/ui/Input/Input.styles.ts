import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledInput = styled.input`
  border: none;
  background: none;
  outline: none;
  color: ${(props) => rgba(props.theme.mainColor, 0.5)};
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: capitalize;

  &:focus {
    border: none;
    color: ${(props) => props.theme.mainColor};
  }
`;
