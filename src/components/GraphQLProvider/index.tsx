import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import type { ReactNode } from 'react';

export default function GraphQLProvider({ children }: { children: ReactNode }) {
  const client = new ApolloClient({
    uri:
      process.env.NODE_ENV === 'development'
        ? process.env.NEXT_PUBLIC_LOCAL_APOLLO
        : process.env.NEXT_PUBLIC_PROD_APOLLO,
    cache: new InMemoryCache(),
  });

  console.info(`hey 🖼🖼🖼🖼🖼 ${process.env.NEXT_PUBLIC_PROD_APOLLO}`);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
