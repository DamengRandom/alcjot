import '../styles/global.css';

import type { AppProps } from 'next/app';

import AlcjotContexts from '@/contexts';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AlcjotContexts>
    <Component {...pageProps} />
  </AlcjotContexts>
);

export default MyApp;
