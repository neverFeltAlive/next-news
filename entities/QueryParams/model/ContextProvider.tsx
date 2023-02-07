import { createContext, FC, ReactNode, useState } from 'react';
import { INewsAPIAllParams, INewsAPIHeadlineParams } from '@/shared/NewsAPI';

interface IProps {
  children: ReactNode;
}

interface IContext {
  params: INewsAPIAllParams | INewsAPIHeadlineParams;
  setParams: (params: INewsAPIAllParams | INewsAPIHeadlineParams) => void;
}

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
