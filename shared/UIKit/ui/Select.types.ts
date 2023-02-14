import { ReactElement } from 'react';

import { setValueType } from '../index.types';

export interface IProps<T> {
  defaultValue: string;
  selected: string;
  setValue: setValueType<T>;
  children: ((
    setValue: setValueType<T>,
    onClick?: () => void
  ) => ReactElement)[];
}
