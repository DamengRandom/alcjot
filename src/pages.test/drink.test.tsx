import { cleanup, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import React from 'react';

import Drinks from '@/pages/drinks/[id]';

import { defaultBoozes } from './mocks';

jest.mock('../utils/apiCaller');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: jest.fn().mockReturnValue({
    basePath: process.env.NEXT_PUBLIC_BASE_LOCAL_URL || 'http://localhost:6677',
    query: { id: 'brandy' },
  }),
}));

describe('Drinks page Render method', () => {
  const setSearchText = jest.fn();
  const setCurrentResponse = jest.fn().mockReturnValue(defaultBoozes);
  const { basePath, query } = useRouter();

  beforeEach(() => {
    jest.spyOn(React, 'useState').mockImplementation(() => ['', setSearchText]);

    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [defaultBoozes, setCurrentResponse]);
  });

  afterEach(cleanup);

  it('should have drink page title', () => {
    render(<Drinks />);

    const pageTitle = screen.getByText(/(brandy)/);

    expect(pageTitle).toBeInTheDocument();
    expect(query.id).toEqual('brandy');
    expect(basePath).toBe('http://localhost:6677');
  });

  it('should show a record', async () => {
    render(<Drinks />);

    const recordName = screen.getAllByText(/Test2/);
    const recordImageUrl = 'https://test-image.png';

    const recordImage = screen.getByTestId('booze-image');

    expect(recordName[0]).toBeInTheDocument();
    expect(
      recordImage.outerHTML.toString().includes(recordImageUrl)
    ).toBeTruthy();
  });
});
