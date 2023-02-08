import { ReactElement, useState } from 'react';

import styled from 'styled-components';

import { setValueType } from '@/shared/UIKit/ui/types';
import { FaAngleDown } from 'react-icons/fa';

//region Styled
const StyledSelect = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.lightColor};
  width: 200px;
  padding: 5px 10px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const SelectHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SelectOptions = styled.div<{ isOpen: boolean }>`
  padding-top: 10px;
  position: absolute;
  overflow: hidden;
  width: 200px;
  z-index: 10;
  left: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  pointer-events: ${(props) => (props.isOpen ? 'all' : 'none')};
  background-color: ${(props) => props.theme.lightColor};
  height: ${(props) => (props.isOpen ? 'fit-content' : '0')};
  transition: all 1s ease-in-out;
`;

const Icon = styled.button<{ isOpen: boolean }>`
  border: none;
  background: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => props.theme.mainColor};
  transform: rotate(${(props) => (props.isOpen ? '180deg' : '0deg')});
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;
//endregion

interface IProps<T> {
  selected: string;
  setValue: setValueType<T>;
  children: ((
    setValue: setValueType<T>,
    onClick?: () => void
  ) => ReactElement)[];
}

export const Select = <T extends string | number>({
  selected,
  children,
  setValue,
}: IProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionsClick = () => {
    setIsOpen(false);
  };

  return (
    <StyledSelect>
      <SelectHead>
        {selected}
        <Icon isOpen={isOpen} onClick={handleOpenClick}>
          <FaAngleDown />
        </Icon>
      </SelectHead>
      <SelectOptions isOpen={isOpen}>
        {children.map((child) => child(setValue, handleOptionsClick))}
      </SelectOptions>
    </StyledSelect>
  );
};

export default Select;
