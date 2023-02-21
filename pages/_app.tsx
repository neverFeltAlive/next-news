import type { AppProps } from 'next/app';

import { appWithTranslation } from 'next-i18next';

import { ReactQueryInitializer } from '@/app/ReactQuery';
import { ThemeWrapper } from '@/app/StyledComponents';

function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryInitializer>
      <ThemeWrapper>
        <Component {...pageProps} />
      </ThemeWrapper>
    </ReactQueryInitializer>
  );
}

export default appWithTranslation(App);
