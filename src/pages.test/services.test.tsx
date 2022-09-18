import { render, screen } from '@testing-library/react';

import Services from '@/pages/services';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Services page', () => {
  describe('Render method', () => {
    jest.useFakeTimers();

    it('should have based text', () => {
      render(<Services />);

      const heading = screen.getByText(/Services Main/);

      expect(heading).toBeInTheDocument();
    });
  });
});
