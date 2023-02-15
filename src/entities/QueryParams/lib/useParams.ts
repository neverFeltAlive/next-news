import { useContext } from 'react';

import { INewsAPIAllParams, INewsAPIHeadlineParams } from '@/shared/NewsAPI';

import { ParamsContext } from '../model/ContextProvider';

export const useParams = () => {
  const { params, setParams } = useContext(ParamsContext);
  return [params, setParams] as [
    INewsAPIAllParams | INewsAPIHeadlineParams,
    (params: INewsAPIAllParams | INewsAPIHeadlineParams) => void
  ];
};
