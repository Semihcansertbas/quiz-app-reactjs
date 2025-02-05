import React from 'react';
import { mount } from '@cypress/react';
import Quiz from '../../src/components/Quiz/Quiz';

describe('Quiz Component Tests', () => {
  it('should render the Quiz component correctly', () => {
    mount(<Quiz />);
    cy.get('h1').should('contain', 'Quiz App');
  });

  it('should display the first question', () => {
    mount(<Quiz />);
    cy.get('h2').should('contain', '1.');
  });

  it('should increment question index when Next button is clicked', () => {
    mount(<Quiz />);
    cy.get('button').contains('Next').click();
    cy.get('h2').should('contain', '2.');
  });
});
