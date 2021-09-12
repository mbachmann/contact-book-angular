

describe('Home Page', () => {
  it('should display the Title Contact Book | Visualize your contacts on the home page', () => {
    cy.visit('/'); // go to the app page

    // get the title and verify that the app name is in it
    cy.title()
     .should('eq', 'Contact Book | Visualize your contacts');
  });
})
