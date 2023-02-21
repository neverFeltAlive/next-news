import { FC, InputHTMLAttributes } from 'react';

import { StyledInput } from './Input.styles';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  value,
  ...props
}) => {
  return <StyledInput type="text" value={value} {...props} />;
};

export default Input;
