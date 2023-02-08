import { ReactNode } from 'react';

import styled from 'styled-components';
import { rgba } from 'polished';

import { setValueType } from '@/shared/UIKit/ui/types';

const StyledOption = styled.div<{ isSelected: boolean }>`
  background-color: ${(props) => props.theme.lightColor};
  color: ${(props) =>
    props.isSelected
      ? rgba(props.theme.mainColor, 0.5)
      : props.theme.mainColor};
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  pointer-events: ${(props) => (props.isSelected ? 'none' : 'all')};

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }

  &:active {
    color: ${(props) => props.theme.shadowColor};
  }
`;

interface IProps<T> {
  value: T;
  children?: ReactNode;
  setValue: setValueType<T>;
  onClick?: () => void;
  isSelected: boolean;
}

export const Option = <T,>({
  children,
  value,
  setValue,
  onClick,
  isSelected = false,
}: IProps<T>) => {
  return (
    <StyledOption
      isSelected={isSelected}
      onClick={() => {
        !!onClick && onClick();
        setValue(value);
      }}
    >
      {children}
    </StyledOption>
  );
};

export default Option;
