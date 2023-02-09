import { createContext, FC, ReactNode, useState } from 'react';

import { INewsAPIAllParams, INewsAPIHeadlineParams } from '@/shared/NewsAPI';

import {
  IContext,
  IProps,
} from '@/entities/QueryParams/model/ContextProvider.types';

const initialParams = {
  q: '',
};

export const ParamsContext = createContext<IContext>({
  params: initialParams,
  setParams: ({}) => {},
});

export const ContextProvider: FC<IProps> = ({ children }) => {
  const [params, setParams] = useState<
    INewsAPIAllParams | INewsAPIHeadlineParams
  >(initialParams);

  const setQueryParams = (
    params: INewsAPIAllParams | INewsAPIHeadlineParams
  ) => {
    setParams((oldParams) => {
      return { ...oldParams, ...params };
    });
  };

  return (
    <ParamsContext.Provider value={{ params, setParams: setQueryParams }}>
      {children}
    </ParamsContext.Provider>
  );
};

export default ContextProvider;
