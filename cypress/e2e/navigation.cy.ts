describe('Navigation', () => {
  describe('Static pages', () => {
    it('should navigate to the services page', () => {
      // Start from the index page
      cy.visit('/');

      // Find a link containing "Services" text and click it
      cy.findByRole('link', { name: 'Services' }).click();

      // The new url should include "/Services"
      cy.url().should('include', '/services');

      cy.findAllByText('Services Page', { exact: false }).should(
        'have.length',
        1
      );
    });
  });
});
