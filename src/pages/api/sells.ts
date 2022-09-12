import SellCollection from 'model/sellSchema';
import type { NextApiRequest, NextApiResponse } from 'next/types';

import apiHandler from '@/utils/apiHandler';
import { APIMessage } from '@/utils/AppConfig';

import connect from '../../../lib/mongodb';

connect(); // ensure connect to mongodb

interface ISell {
  time: string;
  title: string;
  quantity: string;
  paylink: string;
}

const sellHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { body, method } = req;
    let product;
    let products;

    switch (method) {
      case 'POST':
        product = await SellCollection.create(body as ISell);

        if (!product)
          apiHandler(res, 400, {
            error: APIMessage.General_400('/sell during creation'),
          });

        apiHandler(res, 201, product);
        break;
      case 'GET':
        products = await SellCollection.find();

        if (!products)
          apiHandler(res, 400, {
            error: APIMessage.General_404('/sell'),
          });

        apiHandler(res, 200, products);
        break;
      default:
        apiHandler(res, 405, {
          error: APIMessage.General_405(method as string),
        });
    }
  } catch (error) {
    apiHandler(res, 500, { error: error?.message });
  }
};

export default sellHandler;
