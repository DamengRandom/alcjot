import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import Jotpad from '@/pages/jotpad';

global.fetch = require('jest-fetch-mock');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Jotpad page', () => {
  describe('Render method', () => {
    const setLoading = jest.fn();
    const setAuthenticated = jest.fn();

    afterEach(cleanup);

    it('should have price field', () => {
      jest
        .spyOn(React, 'useState')
        .mockImplementation(() => [false, setLoading]);

      render(<Jotpad />);

      const fieldLabel = screen.getByText(/Login now/);

      expect(fieldLabel).toBeInTheDocument();
    });

    // eslint-disable-next-line jest/no-disabled-tests
    it.skip('should have description field', async () => {
      localStorage.setItem('userId', 'test1');

      await (fetch as any).mockResponse(JSON.stringify({ token: 'test' }));

      const useStateMock: any = (useState: any) => [useState, setAuthenticated];

      jest
        .spyOn(React, 'useState')
        .mockImplementation(() => useStateMock('true'));

      setLoading.mockReturnValue(() => false);

      render(<Jotpad />);

      const fieldLabel = screen.getByText(/price/);

      expect(fieldLabel).toBeInTheDocument();
      // expect(true).toBe(true);
    });
  });
});
