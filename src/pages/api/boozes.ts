import type { NextApiRequest, NextApiResponse } from 'next';

import apiHandler from '@/utils/apiHandler';
import { APIMessage } from '@/utils/AppConfig';
import type { BoozeForm } from '@/utils/appTypes';

import connect from '../../../lib/mongodb';
import DrinkCollection from '../../../model/drinkSchema';

connect(); // ensure connect to mongodb

const boozeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { body, method } = req;
    let booze;
    let boozes;

    switch (method) {
      case 'POST':
        body.time = new Date().toISOString();
        booze = await (DrinkCollection as any).create(body as BoozeForm);

        if (!booze)
          apiHandler(res, 400, {
            error: APIMessage.General_400('/boozes during creation'),
          });

        apiHandler(res, 201, booze);
        break;
      case 'GET':
        boozes = await (DrinkCollection as any).find();

        if (!boozes)
          apiHandler(res, 400, { error: APIMessage.General_404('/boozes') });

        apiHandler(res, 200, boozes);
        break;
      default:
        apiHandler(res, 405, APIMessage.General_405(method as string));
    }
  } catch (error) {
    apiHandler(res, 500, { error: (error as Error)?.message });
  }
};

export default boozeHandler;
