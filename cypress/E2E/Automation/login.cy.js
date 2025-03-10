describe('These tests include 3 of the critical possibilities that can occur at login time.', () => {

  it('Correct login', () => {
    cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
      auth: {
        username: 'qatesting',
        password: 'qatesting_gig'
      }
    });

    cy.get('#content > magic-notifications')
      .shadow()  
      .find('magic-ui-notification:nth-child(1)')
      .shadow() 
      .find('magic-cookie-popup-notification')
      .shadow()  
      .find('div > magic-ui-button')  
      .click();  

    cy.get('#content > magic-notifications')
      .shadow()
      .find('magic-ui-notification:nth-child(1)')
      .should('not.exist');  

    cy.get('.buttons > [variant="primary"]', { timeout: 2000 }) 
      .should('be.visible') 
      .click(); 

    cy.get('#email', { timeout: 1000 })  
      .should('be.visible')  
      .click() 
      .type('qatest250450@gig.com');

    cy.get('.peek-password > .form-field > .input', { timeout: 1000 }) 
      .should('be.visible') 
      .click()  
      .type('Testerc00-');  

    cy.get('.login-form > .action > .button', { timeout: 1000 })  
      .should('be.visible')  
      .click();  
  });

  it('Incorrect login', () => {
    cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
      auth: {
        username: 'qatesting',
        password: 'qatesting_gig'
      }
    });

    cy.get('#content > magic-notifications')
      .shadow()  
      .find('magic-ui-notification:nth-child(1)')
      .shadow() 
      .find('magic-cookie-popup-notification')
      .shadow()  
      .find('div > magic-ui-button')  
      .click();  

    cy.get('#content > magic-notifications')
      .shadow()
      .find('magic-ui-notification:nth-child(1)')
      .should('not.exist');  

    cy.get('.buttons > [variant="primary"]', { timeout: 2000 }) 
      .should('be.visible') 
      .click(); 

    cy.get('#email', { timeout: 1000 })  
      .should('be.visible')  
      .click() 
      .type('emailfail@gig.com');

    cy.get('.peek-password > .form-field > .input', { timeout: 1000 }) 
      .should('be.visible') 
      .click()  
      .type('Testrc00-');  

    cy.get('.login-form > .action > .button', { timeout: 1000 })  
      .should('be.visible')  
      .click();  
  });

  it('Login with invalid characters', () => {
    cy.visit('https://qatesting-wand-stg.cpe.gigmagic.io/en', {
      auth: {
        username: 'qatesting',
        password: 'qatesting_gig'
      }
    });

    cy.get('#content > magic-notifications')
      .shadow()  
      .find('magic-ui-notification:nth-child(1)')
      .shadow() 
      .find('magic-cookie-popup-notification')
      .shadow()  
      .find('div > magic-ui-button')  
      .click();  

    cy.get('#content > magic-notifications')
      .shadow()
      .find('magic-ui-notification:nth-child(1)')
      .should('not.exist');  

    cy.get('.buttons > [variant="primary"]', { timeout: 2000 }) 
      .should('be.visible') 
      .click(); 

    cy.get('#email', { timeout: 1000 })  
      .should('be.visible')  
      .click() 
      .type('---2ñ@gig.com');

    cy.get('.peek-password > .form-field > .input', { timeout: 1000 }) 
      .should('be.visible') 
      .click()  
      .type('Testerc00-');  

    cy.get('.login-form > .action > .button', { timeout: 1000 })  
      .should('be.visible')  
      .click();  
  });

});
