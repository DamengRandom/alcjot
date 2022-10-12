import { cleanup } from '@testing-library/react';
import * as mockingoose from 'mockingoose';
import type { NextApiRequest, NextApiResponse } from 'next';

import boozeHandler from '@/pages/api/boozes';

import DrinkModel from '../../../model/drinkSchema';
import { defaultBoozes } from '../mocks';

describe('test api route /boozes', () => {
  afterEach(cleanup);

  it('should return GET response', async () => {
    // Arrange
    const req = {
      method: 'GET',
    } as NextApiRequest;
    const res = {
      status: jest.fn().mockImplementation(() => ({
        json: jest.fn().mockReturnValue(defaultBoozes),
      })),
    } as unknown as NextApiResponse;

    // Act
    mockingoose(DrinkModel).toReturn(defaultBoozes, 'find');
    const response = await boozeHandler(req, res);

    // Assert
    expect((response as any).length).toBe(1);
    expect((response as any)[0].feel).toBe('Test6');
  });
});
