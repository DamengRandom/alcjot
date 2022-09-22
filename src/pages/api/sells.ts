import SellCollection from 'model/sellSchema';
import type { NextApiRequest, NextApiResponse } from 'next/types';

import apiHandler from '@/utils/apiHandler';
import { APIMessage } from '@/utils/AppConfig';
import type { ISell } from '@/utils/appTypes';

import connect from '../../../lib/mongodb';

connect(); // ensure connect to mongodb

const sellHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { body, method } = req;
    let product;
    let products;

    switch (method) {
      case 'POST':
        product = await (SellCollection as any).create(body as ISell);

        if (!product)
          return apiHandler(res, 400, {
            error: APIMessage.General_400('/sell during creation'),
          });

        return apiHandler(res, 201, product);
      case 'GET':
        products = await (SellCollection as any).find();

        if (!products)
          apiHandler(res, 400, {
            error: APIMessage.General_404('/sell'),
          });

        return apiHandler(res, 200, products);
      default:
        return apiHandler(res, 405, APIMessage.General_405(method as string));
    }
  } catch (error) {
    return apiHandler(res, 500, { error: error?.message });
  }
};

export default sellHandler;
