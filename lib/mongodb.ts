import type { ConnectionStates } from 'mongoose';
import mongoose from 'mongoose';

const connection: { isConnected?: ConnectionStates } = {};

async function connect() {
  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.MONGODB_URI as string);

    connection.isConnected = db?.connections[0]?.readyState;
    console.info('Database connected ~~');
  } catch (error) {
    console.error('Database not connected yet', error?.message);
  }
}

export default connect;
