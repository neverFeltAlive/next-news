import { FC } from 'react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { IProps } from './Initializer.types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const Initializer: FC<IProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        {children}
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </>
    </QueryClientProvider>
  );
};

export default Initializer;
