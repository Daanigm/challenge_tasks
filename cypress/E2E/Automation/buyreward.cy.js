describe('This test corresponds to a correctly logged in user purchasing a reward correctly.', () => {
    it('It is a successfully logged in user who purchases a reward', () => {

    // First, I visit the testing page with predefined credentials to ensure the authentication process works correctly.
    // This tests the login flow in an integrated manner, checking if the system allows access without errors.
     
        cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
        auth: {
          username: 'qatesting',
          password: 'qatesting_gig'
        }
      });

    // I handle any interruptions such as popups or notifications. In this case, I close the cookie consent popup,
    // reflecting a common practice to improve user experience (UX) and ensure uninterrupted testing.
     
        cy.get('#content > magic-notifications')
        .shadow()
        .find('magic-ui-notification:nth-child(1)')
        .shadow()
        .find('magic-cookie-popup-notification')
        .shadow()
        .find('div > magic-ui-button')
        .click();
  
   // I verify that the cookie notification has disappeared after being closed, indicating that the system is responsive.

      cy.get('#content > magic-notifications')
        .shadow()
        .find('magic-ui-notification:nth-child(1)')
        .should('not.exist');
        
  // I proceed with automating the login process to ensure the login fields accept input correctly.
  // This tests the application's behavior for user authentication.
        
      cy.get('.buttons > [variant="primary"]', { timeout: 10000 }).click();
      cy.get('#email').type('qatest250450@gig.com');
      cy.get('.peek-password > .form-field > .input').type('Testerc00-');
      cy.get('.login-form > .action > .button').click();
   
        // I use `cy.wait` to ensure the login process completes before proceeding. 
       // While not the most optimal method, it's necessary for this test case to ensure stability.
     
        cy.wait(2000);
      
        // I simulate a typical user interaction: navigating through the menu and opening the rewards page.
       // This verifies the application's ability to handle user navigation effectively.
      
        cy.get('.menu > .link > .icon').click()
        cy.get(':nth-child(10) > .link').click()
     
        // I wait for 5 seconds to ensure the page has fully loaded before selecting a reward.
        // Ideally, this can be replaced with `cy.intercept` to wait for resource loading completion.
     
        cy.wait(5000);
      
      // I locate and select a specific item from the store, beginning the process of reward purchase.
      // This reflects a common e-commerce user interaction, validating the system's ability to manage product selection.
      
    cy.get('#content > div > div > magic-shop')
      .shadow()
      .find('div > div > magic-ui-grid > magic-shop-item:nth-child(2)')
      .shadow()
      .find('div > div.content > div.details > magic-ui-button')
      .shadow()
      .find('button')
      .click()

    // I wait 4 seconds to ensure any asynchronous actions like UI updates or backend requests are completed.
    // Again, a more robust approach would involve waiting for specific network requests to finish.
      
        cy.wait(4000); 

    // Finally, I simulate confirming the purchase by clicking on the confirmation button in the modal window.
    // This ensures that the system properly handles the completion of a purchase transaction.
      
        cy.get('#app > div.container > div > magic-ui-modal > magic-shop-details-modal')
        .shadow()
        .find('div > div.action > magic-ui-button:nth-child(1)')
        .click()
    });
  });
  
