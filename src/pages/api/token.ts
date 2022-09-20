import TokenCollection from 'model/tokenSchema';
import type { NextApiRequest, NextApiResponse } from 'next/types';

import apiHandler from '@/utils/apiHandler';
import { APIMessage } from '@/utils/AppConfig';

import connect from '../../../lib/mongodb';

connect(); // ensure connect to mongodb

interface IToken {
  id: string;
  token: string;
}

const tokenHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      body,
      method,
      query: { id },
    } = req;
    let token;
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
      case 'POST':
        token = await (TokenCollection as any).create(body as IToken);

        if (!token)
          apiHandler(res, 400, {
            error: APIMessage.General_400('/token during creation'),
          });

        apiHandler(res, 201, token);
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
        apiHandler(res, 405, {
          error: APIMessage.General_405(method as string),
        });
    }
  } catch (error) {
    apiHandler(res, 500, { error: error?.message });
  }
};

export default tokenHandler;
