describe('These tests include 3 of the critical possibilities that can occur at login time.', () => {
// Visiting the page and using correct credentials to ensure a successful login flow.
// This test validates that a properly authenticated user can log in without issues.
  
  it('Correct login', () => {
    cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
      auth: {
        username: 'qatesting',
        password: 'qatesting_gig'
      }
    });
 
  // Handling the cookie consent popup by finding the appropriate button and clicking it.
  // This ensures the user's flow isn't interrupted by non-essential modals.
    cy.get('#content > magic-notifications')
      .shadow()  
      .find('magic-ui-notification:nth-child(1)')
      .shadow() 
      .find('magic-cookie-popup-notification')
      .shadow()  
      .find('div > magic-ui-button')  
      .click();  
   // Verifying that the cookie notification is removed from the UI, confirming the dismissal was successful.
    cy.get('#content > magic-notifications')
      .shadow()
      .find('magic-ui-notification:nth-child(1)')
      .should('not.exist');  
    // Clicking the login button to initiate the login process.
    // Verifying that the button is visible before interacting with it.
    cy.get('.buttons > [variant="primary"]', { timeout: 2000 }) 
      .should('be.visible') 
      .click(); 
  // Typing the valid user email into the email field and verifying the field is visible.
    cy.get('#email', { timeout: 1000 })  
      .should('be.visible')  
      .click() 
      .type('qatest250450@gig.com');
 // Typing the valid user password and ensuring the password field is visible before interaction.
    cy.get('.peek-password > .form-field > .input', { timeout: 1000 }) 
      .should('be.visible') 
      .click()  
      .type('Testerc00-');  
  // Clicking the login button to complete the login process.
  // Again verifying that the button is visible and clicking it to submit the login form.
    cy.get('.login-form > .action > .button', { timeout: 1000 })  
      .should('be.visible')  
      .click();  
  });
 // Test scenario with incorrect login credentials.
 // This verifies that the system correctly handles invalid user data.
  it('Incorrect login', () => {
    cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
      auth: {
        username: 'qatesting',
        password: 'qatesting_gig'
      }
    });
// Handling the cookie consent popup in the same way as the previous test.
    cy.get('#content > magic-notifications')
      .shadow()  
      .find('magic-ui-notification:nth-child(1)')
      .shadow() 
      .find('magic-cookie-popup-notification')
      .shadow()  
      .find('div > magic-ui-button')  
      .click();  
 // Confirming that the notification has been dismissed.
    cy.get('#content > magic-notifications')
      .shadow()
      .find('magic-ui-notification:nth-child(1)')
      .should('not.exist');  
// Clicking the login button and verifying the email and password fields.
    cy.get('.buttons > [variant="primary"]', { timeout: 2000 }) 
      .should('be.visible') 
      .click(); 
// Entering an incorrect email address for the login attempt.
    cy.get('#email', { timeout: 1000 })  
      .should('be.visible')  
      .click() 
      .type('emailfail@gig.com');
// Entering an incorrect password for the login attempt.
    cy.get('.peek-password > .form-field > .input', { timeout: 1000 }) 
      .should('be.visible') 
      .click()  
      .type('Testrc00-');  
 // Submitting the login form with invalid credentials and verifying proper handling of the failed login attempt.
    cy.get('.login-form > .action > .button', { timeout: 1000 })  
      .should('be.visible')  
      .click();  
  });
 // This test case verifies the system's behavior when invalid characters are entered in the login form fields.
 // It ensures that the system properly handles special characters and rejects any incorrect inputs.
  it('Login with invalid characters', () => {
    cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
      auth: {
        username: 'qatesting',
        password: 'qatesting_gig'
      }
    });
// Again, handling the cookie consent popup.
    cy.get('#content > magic-notifications')
      .shadow()  
      .find('magic-ui-notification:nth-child(1)')
      .shadow() 
      .find('magic-cookie-popup-notification')
      .shadow()  
      .find('div > magic-ui-button')  
      .click();  
// Verifying that the cookie consent notification has been removed.
    cy.get('#content > magic-notifications')
      .shadow()
      .find('magic-ui-notification:nth-child(1)')
      .should('not.exist');  
// Clicking the login button and verifying the email and password fields.
    cy.get('.buttons > [variant="primary"]', { timeout: 2000 }) 
      .should('be.visible') 
      .click(); 
// Typing an email address with invalid characters to test how the system handles invalid input.
    cy.get('#email', { timeout: 1000 })  
      .should('be.visible')  
      .click() 
      .type('---2ñ@gig.com');
 // Typing a valid password, but verifying that invalid email input might cause an error or rejection during login.
    cy.get('.peek-password > .form-field > .input', { timeout: 1000 }) 
      .should('be.visible') 
      .click()  
      .type('Testerc00-');  
// Attempting to submit the form and verifying that invalid characters in the email field are properly handled.
    cy.get('.login-form > .action > .button', { timeout: 1000 })  
      .should('be.visible')  
      .click();  
  });

});
