import { ApolloServer } from 'apollo-server';
import { resolvers } from 'gql/resolvers';
import { typeDefs } from 'gql/typeDefs';
import connect from 'lib/mongodb';
import type { NextApiResponse } from 'next';

import apiHandler from '@/utils/apiHandler';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cors: {
    origin: ['https://alcjot.vercel.app', 'https://studio.apollographql.com'],
  },
});

async function graphqlHandler(_: any, res: NextApiResponse) {
  try {
    await connect();
    const apolloServerResponse = await server.listen();

    console.info(
      `Apollo Server is running on ${apolloServerResponse.url} 🌴🌴 ~~`
    );

    return apiHandler(res, 200, apolloServerResponse);
  } catch (error) {
    console.info('🤪🤪🤪🤪🤪🤪🤪🤪🤪', error?.message);
    return apiHandler(res, 500, { error: error?.message });
  }
}

export default graphqlHandler;
