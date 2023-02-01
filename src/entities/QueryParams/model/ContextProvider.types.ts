import { ReactNode } from 'react';

import { INewsAPIAllParams, INewsAPIHeadlineParams } from '@/shared/NewsAPI';

export interface IProps {
  children: ReactNode;
}

export interface IContext {
  params: INewsAPIAllParams | INewsAPIHeadlineParams;
  setParams: (params: INewsAPIAllParams | INewsAPIHeadlineParams) => void;
}
