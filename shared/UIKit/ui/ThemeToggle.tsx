import { FC } from 'react';

import { StyledToggle } from './ThemeToggle.styles';
import { IProps } from './ThemeToggle.types';

export const ThemeToggle: FC<IProps> = ({ value, toggleValue }) => {
  return <StyledToggle isActive={value} onClick={() => toggleValue()} />;
};

export default ThemeToggle;
