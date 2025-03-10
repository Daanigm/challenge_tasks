// Visiting the login page with valid credentials to ensure a successful login.
// This is an integration test that validates user authentication and sets up for further user actions.

describe('Set wager limits from a properly logged in user', () => {
    it('Set a wager limit from the account section', () => {
      
      cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
        auth: {
          username: 'qatesting',
          password: 'qatesting_gig'
        }
      });
  
  // Handling the cookie consent popup to ensure it doesn't interrupt the user's flow.
  // Ensuring that the user is not distracted by unnecessary popups before setting the wager limit.
     
      cy.get('#content > magic-notifications')
        .shadow()  
        .find('magic-ui-notification:nth-child(1)')
        .shadow()  
        .find('magic-cookie-popup-notification')
        .shadow() 
        .find('div > magic-ui-button')  
        .click();  

   // Verifying that the cookie notification has been removed, confirming that the interaction was successful.
   
      cy.get('#content > magic-notifications')
        .shadow()
        .find('magic-ui-notification:nth-child(1)')
        .should('not.exist');  
  
   // Verifying that the login button is visible before clicking it to submit the form.
   // This ensures that the user is presented with the login button before interacting.
      
      cy.get('.buttons > [variant="primary"]', { timeout: 2000 }) 
        .should('be.visible') 
        .click(); 
   // Typing the valid user's email and confirming that the email field is visible. 
      cy.get('#email', { timeout: 1000 })  
        .should('be.visible')  
        .click() 
        .type('qatest250450@gig.com');
  // Typing the password into the password field and confirming the field is visible before interacting.
      cy.get('.peek-password > .form-field > .input', { timeout: 1000 }) 
        .should('be.visible') 
        .click()  
        .type('Testerc00-');  
  
  // Clicking the login button to submit the form and initiate the login process.   
      cy.get('.login-form > .action > .button', { timeout: 1000 })  
        .should('be.visible')  
        .click();  
 // Waiting for 2 seconds to ensure the page has fully loaded and the login process is complete.
      cy.wait(2000);
 // Navigating through the menu to access the account settings where wager limits are set.
 // This action simulates a typical user flow of accessing settings from the user menu.
      cy.get('.menu > .link > .icon').click()
      cy.get('.items > :nth-child(1) > .link > .icon').click()
 // Accessing the 'Wager Limits' section under the account menu.
 // This validates the accessibility of the account limits settings for a logged-in user.    
      cy.get('#content > div > magic-account-menu')
        .shadow()
        .find('ul > li:nth-child(3) > a > div.action > magic-ui-icon', { timeout: 1000 }) 
        .click();
 // Clicking the 'Set Limit' button to access the limit-setting functionality.
 // This ensures that the system allows the user to configure their wager limits as intended.
      cy.get('#content > div > div > magic-view-limits') 
        .shadow()  
        .find('div > div > div.action > magic-ui-link')  
        .shadow()  
        .find('magic-ui-button')  
        .shadow()  
        .find('a')  
        .should('be.visible')  
        .click({ force: true });  
 // Typing a valid wager limit (e.g., 5700) into the input field.
 // This verifies that the system accepts input for the wager limit configuration
       cy.get('#content > div > div > magic-create-limits')  
        .shadow()  
        .find('div > form > magic-ui-form-field.input')  
        .shadow()  
        .find('div > magic-ui-input')  
        .shadow()  
        .find('input')  
        .type('5700');  
  // Clicking the 'Save' button to save the newly set wager limit.
  // This final step ensures that the system correctly handles saving the user’s preferences.
       cy.get('#content > div > div > magic-create-limits')  
        .shadow()  
        .find('div > form > div > magic-ui-button') 
        .shadow()  
        .find('button')  
        .click();  


      

    });
  });

  
