import bcrypt from 'bcrypt';
import PasscodeCollection from 'model/passcodeSchema';
import type { NextApiRequest, NextApiResponse } from 'next/types';

import apiHandler from '@/utils/apiHandler';
import { APIMessage } from '@/utils/AppConfig';

import connect from '../../../lib/mongodb';

connect(); // ensure connect to mongodb

interface IPasscode {
  passcode: string;
}

const verifyHandler = async (req: NextApiRequest, res: NextApiResponse) => {
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

    switch (method) {
      case 'POST':
        passcodeObject = await (PasscodeCollection as any).findById(id);

        if (passcodeObject)
          bcrypt
            .compare(passcode, (passcodeObject as IPasscode)?.passcode)
            .then((result: boolean) =>
              result
                ? apiHandler(res, 200, { message: APIMessage.Login_200 })
                : apiHandler(res, 200, { error: APIMessage.General_401 })
            );
        break;
      default:
        apiHandler(res, 405, APIMessage.General_405(method as string));
    }
  } catch (error) {
    apiHandler(res, 500, { error: error?.message });
  }
};

export default verifyHandler;
