import { ReactNode } from 'react';

import { setValueType } from '../index.types';

export interface IProps<T> {
  value: T;
  children?: ReactNode;
  setValue: setValueType<T>;
  onClick?: () => void;
  isSelected: boolean;
}
