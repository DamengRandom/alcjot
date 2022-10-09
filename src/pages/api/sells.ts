import SellCollection from 'model/sellSchema';
import type { NextApiRequest, NextApiResponse } from 'next/types';

import apiHandler from '@/utils/apiHandler';
import { APIMessage } from '@/utils/AppConfig';
import type { ISell } from '@/utils/appTypes';

import connect from '../../../lib/mongodb';

connect(); // ensure connect to mongodb

const sellHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      body,
      method,
      query: { title },
    } = req;
    let product;
    let response;
    let filterByTitle;

    switch (method) {
      case 'POST':
        body.time = new Date().toISOString();
        product = await (SellCollection as any).create(body as ISell);

        if (!product)
          return apiHandler(res, 400, {
            error: APIMessage.General_400('/sells during creation'),
          });

        return apiHandler(res, 201, product);
      case 'GET':
        filterByTitle = { title };
        response = title
          ? await (SellCollection as any).findOne(filterByTitle)
          : await (SellCollection as any).find();

        if (!response)
          return apiHandler(res, 404, {
            error: APIMessage.General_404('/sells'),
          });

        return apiHandler(res, 200, response);
      default:
        return apiHandler(res, 405, APIMessage.General_405(method as string));
    }
  } catch (error) {
    return apiHandler(res, 500, { error: error?.message });
  }
};

export default sellHandler;
