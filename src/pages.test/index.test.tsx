import { render, screen } from '@testing-library/react';

import Index from '@/pages/index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Index page', () => {
  describe('Render method', () => {
    jest.useFakeTimers();

    it('should have based text', () => {
      render(<Index />);

      const heading = screen.getByText(/6 based/);

      expect(heading).toBeInTheDocument();
    });

    it('should have Damengrandom text', () => {
      render(<Index />);

      const heading = screen.getByText(/Damengrandom/);

      expect(heading).toBeInTheDocument();
    });
  });
});
