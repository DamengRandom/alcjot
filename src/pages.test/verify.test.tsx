import { cleanup, render, screen } from '@testing-library/react';

import Verify from '@/pages/verify';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Verify page', () => {
  describe('Render method', () => {
    jest.useFakeTimers();

    afterEach(cleanup);

    it('should have id field', () => {
      render(<Verify />);

      const fieldLabel = screen.getByText(/ID/);

      expect(fieldLabel).toBeInTheDocument();
    });

    it('should have based text', () => {
      render(<Verify />);

      const fieldLabel = screen.getByText(/Salt/);

      expect(fieldLabel).toBeInTheDocument();
    });
  });
});
