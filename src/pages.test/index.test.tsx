import { render, screen } from '@testing-library/react';

import AlcjotContexts from '@/contexts';
import Index from '@/pages/index';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Index page', () => {
  describe('Render method', () => {
    jest.useFakeTimers();

    it('should have based text', () => {
      render(
        <AlcjotContexts>
          <Index />
        </AlcjotContexts>
      );

      const heading = screen.getByText(/Gin/);

      expect(heading).toBeInTheDocument();
    });

    it('should have Damengrandom text', () => {
      render(
        <AlcjotContexts>
          <Index />
        </AlcjotContexts>
      );

      const heading = screen.getByText(/Damengrandom/);

      expect(heading).toBeInTheDocument();
    });
  });
});
