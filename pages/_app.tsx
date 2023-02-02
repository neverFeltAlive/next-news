import type { AppProps } from 'next/app';
import { ReactQueryInitializer } from '@/app/ReactQuery';
import { ThemeWrapper } from '@/app/StyledComponents';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryInitializer>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </ReactQueryInitializer>
  );
}
