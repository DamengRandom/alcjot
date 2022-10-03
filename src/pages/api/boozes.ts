import type { NextApiRequest, NextApiResponse } from 'next';

import apiHandler from '@/utils/apiHandler';
import { APIMessage } from '@/utils/AppConfig';
import type { BoozeForm } from '@/utils/appTypes';

import connect from '../../../lib/mongodb';
import DrinkCollection from '../../../model/drinkSchema';

connect(); // ensure connect to mongodb

const boozeHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      body,
      method,
      query: { type },
    } = req;
    let booze;
    let boozes;
    let taggedBoozes;

    switch (method) {
      case 'POST':
        body.time = new Date().toISOString();
        booze = await (DrinkCollection as any).create(body as BoozeForm);

        if (!booze)
          return apiHandler(res, 400, {
            error: APIMessage.General_400('/boozes during creation'),
          });

        return apiHandler(res, 201, booze);
      case 'GET':
        boozes = await (DrinkCollection as any).find();

        if (!boozes)
          return apiHandler(res, 400, {
            error: APIMessage.General_404('/boozes'),
          });

        taggedBoozes = type
          ? boozes.filter((b: any) => b.type === type)
          : boozes;

        return apiHandler(res, 200, taggedBoozes);
      default:
        return apiHandler(res, 405, APIMessage.General_405(method as string));
    }
  } catch (error) {
    return apiHandler(res, 500, { error: (error as Error)?.message });
  }
};

export default boozeHandler;
