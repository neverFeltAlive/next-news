import {
  FC,
  FocusEvent,
  FormHTMLAttributes,
  InputHTMLAttributes,
  useRef,
} from 'react';

import Input from '@/shared/UIKit/ui/Input';

import { FaSearch, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { rgba } from 'polished';

//region Styled
const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: fit-content;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.lightColor};
  color: ${(props) => props.theme.mainColor};
`;

const Button = styled.button<{ isActive: boolean }>`
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${(props) => (!props.isActive ? 'none' : 'all')};
  color: ${(props) =>
    props.isActive
      ? props.theme.accentColor
      : rgba(props.theme.mainColor, 0.5)};

  transition: all 0.3s ease-in-out;
`;

const ClearButton = styled(Button)`
  opacity: ${(props) => (props.isActive ? 1 : 0)};
`;
//endregion

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  clearValue: () => void;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}

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
