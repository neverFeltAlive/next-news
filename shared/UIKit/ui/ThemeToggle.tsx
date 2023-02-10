import { FC } from 'react';
import { IProps } from '@/shared/UIKit/ui/ThemeToggle.types';
import { StyledToggle } from '@/shared/UIKit/ui/ThemeToggle.styles';

export const ThemeToggle: FC<IProps> = ({ value, toggleValue }) => {
  return <StyledToggle isActive={value} onClick={() => toggleValue()} />;
};

export default ThemeToggle;
