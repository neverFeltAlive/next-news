import { useState } from 'react';

import {
  Icon,
  Selected,
  SelectHead,
  SelectOptions,
  StyledSelect,
} from './Select.styles';
import { IProps } from './Select.types';

import { FaAngleDown } from 'react-icons/fa';

export const Select = <T extends string | number>({
  defaultValue,
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
    <StyledSelect isOpen={isOpen}>
      <SelectHead isSelected={!!selected}>
        <Selected>{!!selected ? selected : defaultValue}</Selected>
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
