import { FC, InputHTMLAttributes } from 'react';

import { rgba } from 'polished';
import styled from 'styled-components';

const StyledInput = styled.input`
  border: none;
  background: none;
  outline: none;
  color: ${(props) => rgba(props.theme.mainColor, 0.5)};
  font-weight: 600;
  letter-spacing: 0.1em;

  &:focus {
    border: none;
    color: ${(props) => props.theme.mainColor};
  }
`;

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  ...props
}) => {
  return <StyledInput type="text" value={value} {...props} />;
};

export default Input;
