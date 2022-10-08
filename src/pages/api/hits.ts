import HitsCollection from 'model/hitsSchema';
import type { NextApiRequest, NextApiResponse } from 'next/types';

import apiHandler from '@/utils/apiHandler';
import { APIMessage } from '@/utils/AppConfig';
import type { IHits } from '@/utils/appTypes';

import connect from '../../../lib/mongodb';

connect(); // ensure connect to mongodb

const hitsHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      method,
      body,
      query: { name },
    } = req;
    let filterByName;
    let response;
    let newHits;
    let update;
    let result;
    let newCounter;

    switch (method) {
      case 'GET':
        filterByName = { name };
        response = await (HitsCollection as any).findOne(filterByName);

        if (!response)
          return apiHandler(res, 400, {
            error: APIMessage.General_400('/hits during fetch'),
          });

        return apiHandler(res, 200, response);
      case 'POST':
        newCounter = await (HitsCollection as any).create(
          body as Partial<IHits>
        );

        if (!newCounter)
          return apiHandler(res, 400, {
            error: APIMessage.General_400('/hits during creation'),
          });

        return apiHandler(res, 201, newCounter);
      case 'PUT':
        filterByName = { name };
        response = await (HitsCollection as any).findOne(filterByName);
        newHits = response.hits + 1;

        update = {
          name,
          hits: newHits,
        };

        result = await (HitsCollection as any).findOneAndUpdate(
          filterByName,
          update
        );

        if (!result)
          return apiHandler(res, 404, {
            error: APIMessage.General_400('/hits update failed ..'),
          });

        return apiHandler(res, 200, APIMessage.General_Update_200);
      default:
        return apiHandler(res, 405, APIMessage.General_405(method as string));
    }
  } catch (error) {
    return apiHandler(res, 500, { error: error?.message });
  }
};

export default hitsHandler;
