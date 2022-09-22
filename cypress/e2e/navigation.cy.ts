describe('Navigation', () => {
  describe('Static pages', () => {
    it('should navigate to the verify page', () => {
      // Start from the index page
      cy.visit('/');

      // Find a link containing "Alcjot" text and click it
      cy.get('[data-cy="Alcjot"] > a').click();

      // The new url should include "/Verify"
      cy.url().should('include', '/verify');

      cy.findAllByText('Salt', { exact: false }).should('have.length', 1);
    });
  });
});
