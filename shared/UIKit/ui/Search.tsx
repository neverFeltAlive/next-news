import { FC, FocusEvent, useRef } from 'react';

import Input from './Input';
import { Button, ClearButton, Form } from './Search.styles';
import { IProps } from './Search.types';

import { FaSearch, FaTimes } from 'react-icons/fa';

export const Search: FC<IProps> = ({ clearValue, inputProps, ...props }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { value } = inputProps;

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    !!inputProps?.onBlur && inputProps.onBlur(event);
    !!buttonRef?.current && buttonRef.current.click(); // submit form
  };

  return (
    <Form {...props}>
      <Button ref={buttonRef} type="submit" isActive={value !== ''}>
        <FaSearch />
      </Button>
      <Input {...inputProps} onBlur={handleBlur} />
      <ClearButton isActive={value !== ''} onClick={() => clearValue()}>
        <FaTimes />
      </ClearButton>
    </Form>
  );
};

export default Search;
