import TokenCollection from 'model/tokenSchema';
import type { NextApiRequest, NextApiResponse } from 'next/types';

import apiHandler from '@/utils/apiHandler';
import { APIMessage } from '@/utils/AppConfig';
import type { IToken } from '@/utils/appTypes';

import connect from '../../../lib/mongodb';

connect(); // ensure connect to mongodb

const tokenHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      method,
      query: { id },
    } = req;
    let tokenObject;
    let tokens;

    switch (method) {
      case 'GET':
        // @TODO Investigate Error: error - uncaughtException: Error [ERR_STREAM_WRITE_AFTER_END]: write after end
        // tokenObject = await (TokenCollection as any).findById({
        //   _id: new ObjectId(req.query.id as string),
        // });
        tokens = await (TokenCollection as any).find();
        tokenObject = tokens.find((t: IToken) => t.id === id);

        if (!tokenObject)
          apiHandler(res, 404, {
            error: APIMessage.General_404('/token'),
          });

        apiHandler(res, 200, tokenObject);
        break;
      case 'DELETE':
        await (TokenCollection as any).findOneAndDelete(id);

        tokenObject = await (TokenCollection as any).findById(id);

        if (!tokenObject)
          apiHandler(res, 200, {
            message: APIMessage.Delete_200(id as string),
          });
        else
          apiHandler(res, 400, {
            error: APIMessage.Delete_400,
          });
        break;
      default:
        apiHandler(res, 405, APIMessage.General_405(method as string));
    }
  } catch (error) {
    apiHandler(res, 500, { error: error?.message });
  }
};

export default tokenHandler;
