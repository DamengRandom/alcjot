import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import type { ReactNode } from 'react';

export default function GraphQLProvider({ children }: { children: ReactNode }) {
  const client = new ApolloClient({
    link: new HttpLink({
      uri:
        process.env.NODE_ENV === 'development'
          ? process.env.NEXT_PUBLIC_LOCAL_APOLLO
          : process.env.NEXT_PUBLIC_PROD_APOLLO,
    }),
    cache: new InMemoryCache(),
  });

  console.info(
    'client: 🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸🥸',
    client,
    process.env.NEXT_PUBLIC_PROD_APOLLO
  );

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
