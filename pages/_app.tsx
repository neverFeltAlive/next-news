import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ReactQueryInitializer } from '@/app/ReactQuery';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryInitializer>
      <Component {...pageProps} />
    </ReactQueryInitializer>
  );
}
