// import { ApolloServer } from 'apollo-server';
import type { ConnectionStates } from 'mongoose';
import mongoose from 'mongoose';

// import { resolvers } from '../gql/resolvers';
// import { typeDefs } from '../gql/typeDefs';

const connection: { isConnected?: ConnectionStates } = {};

// // create Apollo Server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

async function connect() {
  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGODB_URI as string);

    connection.isConnected = db?.connections[0]?.readyState;
    console.info('Database connected ~~');

    // const apolloServerResponse = await server.listen();

    // console.info(
    //   `Apollo Server is running on ${apolloServerResponse.url} 🌴🌴 ~~`
    // );
  } catch (error) {
    console.error('Database not connected yet', error?.message);
    process.exit(1);
  }
}

export default connect;
