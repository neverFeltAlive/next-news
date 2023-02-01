import { FormHTMLAttributes, InputHTMLAttributes } from 'react';

export interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  clearValue: () => void;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
}
