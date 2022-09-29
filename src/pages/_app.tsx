import '../styles/global.css';

import type { AppProps } from 'next/app';

import GraphQLProvider from '@/components/GraphQLProvider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <GraphQLProvider>
    <Component {...pageProps} />
  </GraphQLProvider>
);

export default MyApp;
