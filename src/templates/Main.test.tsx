import { render } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should tru to be true', () => {
      render(<Main meta={null}>{null}</Main>);

      expect(true).toBe(true);
    });
  });
});
