import { setValueType } from '@/shared/UIKit/index.types';
import { ReactElement } from 'react';

export interface IProps<T> {
  defaultValue: string;
  selected: string;
  setValue: setValueType<T>;
  children: ((
    setValue: setValueType<T>,
    onClick?: () => void
  ) => ReactElement)[];
}
