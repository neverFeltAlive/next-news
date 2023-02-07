import { useContext } from 'react';
import { ParamsContext } from '@/entities/QueryParams/model/ContextProvider';
import { INewsAPIAllParams, INewsAPIHeadlineParams } from '@/shared/NewsAPI';

export const useParams = () => {
  const { params, setParams } = useContext(ParamsContext);
  return [params, setParams] as [
    INewsAPIAllParams | INewsAPIHeadlineParams,
    (params: INewsAPIAllParams | INewsAPIHeadlineParams) => void
  ];
};
