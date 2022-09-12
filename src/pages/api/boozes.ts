import type { NextApiRequest, NextApiResponse } from 'next';

import apiHandler from '@/utils/apiHandler';
import { APIMessage } from '@/utils/AppConfig';

import connect from '../../../lib/mongodb';
import DrinkCollection from '../../../model/drinkSchema';

connect(); // ensure connect to mongodb

interface Booze {
  type: string;
  time: Date;
  name: string;
  from: string;
  volume: string;
  capcity: string;
  price: string;
  feel: string;
  description: string;
  // image: Buffer;
}

const boozeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { body, method } = req;
    let booze;
    let boozes;

    switch (method) {
      case 'POST':
        booze = await DrinkCollection.create(body as Booze);

        if (!booze)
          apiHandler(res, 400, {
            error: APIMessage.General_400('/boozes during creation'),
          });

        apiHandler(res, 201, booze);
        break;
      case 'GET':
        boozes = await DrinkCollection.find();

        if (!boozes)
          apiHandler(res, 400, { error: APIMessage.General_404('/boozes') });

        apiHandler(res, 200, boozes);
        break;
      default:
        apiHandler(res, 405, {
          error: APIMessage.General_405(method as string),
        });
    }
  } catch (error) {
    apiHandler(res, 500, { error: (error as Error)?.message });
  }
};

export default boozeHandler;
