import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import Jotpad from '@/pages/jotpad';

// global.fetch = require('jest-fetch-mock');

jest.mock('../utils/apiCaller');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Jotpad page', () => {
  describe('Render method', () => {
    const setStates = jest.fn();

    afterEach(cleanup);

    it('should have price field', () => {
      jest
        .spyOn(React, 'useState')
        .mockImplementation(() => [
          { loading: false, authenticated: false },
          setStates,
        ]);

      render(<Jotpad />);

      const fieldLabel = screen.getByText(/Login now/);

      expect(fieldLabel).toBeInTheDocument();
    });

    it('should have description field', async () => {
      // mock method 1
      // localStorage.setItem('userId', 'test1');

      // await (fetch as any).mockResponse(JSON.stringify({ token: 'test' }));

      // mock method 2
      // await (getAccessToken as any).mockResolvedValueOnce({
      //   token: 'true',
      // });

      jest
        .spyOn(React, 'useState')
        .mockImplementation(() => [
          { loading: false, authenticated: true },
          setStates,
        ]);

      render(<Jotpad />);

      const fieldLabel = screen.getByText(/price/);

      expect(fieldLabel).toBeInTheDocument();
    });
  });
});
