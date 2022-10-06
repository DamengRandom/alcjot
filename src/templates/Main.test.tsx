import { render } from '@testing-library/react';

import AlcjotContexts from '@/contexts';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    jest.useFakeTimers();

    it('should tru to be true', () => {
      render(
        <AlcjotContexts>
          <Main meta={null}>{null}</Main>
        </AlcjotContexts>
      );

      expect(true).toBe(true);
    });
  });
});
