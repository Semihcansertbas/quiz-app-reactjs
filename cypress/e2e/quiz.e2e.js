describe('Quiz E2E Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should render the first question', () => {
      cy.contains('Quiz App').should('be.visible');
      cy.get('h2').should('contain', '1.');
    });
  
    it('should display the result at the end', () => {
      for (let i = 0; i < 5; i++) {
        cy.get('button').contains('Next').click();
      }
      cy.contains('You Scored').should('be.visible');
    });
  });
  