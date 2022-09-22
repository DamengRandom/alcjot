import bcrypt from 'bcrypt';
import PasscodeCollection from 'model/passcodeSchema';
import TokenCollection from 'model/tokenSchema';
import type { NextApiRequest, NextApiResponse } from 'next/types';

import apiHandler from '@/utils/apiHandler';
import { APIMessage } from '@/utils/AppConfig';
import type { IPasscode, IToken } from '@/utils/appTypes';

import connect from '../../../lib/mongodb';

connect(); // ensure connect to mongodb

const verifyHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  try {
    // Create a hashed passcode
    // const { id, passcode } = req.body;

    // bcrypt.genSalt(10, async (err, currentSalt) => {
    //   if (err) apiHandler(res, 400, { error: err?.message });

    //   bcrypt.hash(passcode, currentSalt, async (error, hashed) => {
    //     if (error) apiHandler(res, 400, { error: error?.message });

    //     const savedSalt = await PasscodeCollection.create({
    //       id,
    //       passcode: hashed,
    //     });

    //     if (!savedSalt)
    //       apiHandler(res, 400, { error: APIMessage.General_400 });

    //     res.status(201).json({ message: 'created ~~' });
    //     apiHandler(res, 201, { error: 'passcode has been created ~~'});
    //   });
    // });

    // Verify the hashed passcode
    const {
      body: { id, passcode },
      method,
    } = req;
    let passcodeObject;
    let tokens;
    let tokenObject;
    const accessToken = `${id}_${Math.random().toString(36).substr(2)}`;

    switch (method) {
      case 'POST':
        passcodeObject = await (PasscodeCollection as any).findById(id);

        if (passcodeObject)
          bcrypt
            .compare(passcode, (passcodeObject as IPasscode)?.passcode)
            .then(async (result: boolean) => {
              if (result) {
                tokens = await (TokenCollection as any).find();
                tokenObject = await tokens.find((t: IToken) => t.id === id);

                if (!tokenObject) {
                  await (TokenCollection as any).create({
                    id,
                    token: accessToken,
                  });
                }
                return apiHandler(res, 200, { isAuthenticated: true });
              }
              return apiHandler(res, 401, { error: APIMessage.General_401 });
            });
        break;
      default:
        return apiHandler(res, 405, APIMessage.General_405(method as string));
    }

    return true;
  } catch (error) {
    return apiHandler(res, 500, { error: error?.message });
  }
};

export default verifyHandler;
