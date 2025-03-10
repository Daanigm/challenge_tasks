describe('This test corresponds to a correctly logged in user purchasing a reward correctly.', () => {
    it('It is a successfully logged in user who purchases a reward', () => {
   
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
  
      cy.get('.buttons > [variant="primary"]', { timeout: 10000 }).click();
      cy.get('#email').type('qatest250450@gig.com');
      cy.get('.peek-password > .form-field > .input').type('Testerc00-');
      cy.get('.login-form > .action > .button').click();
  
      cy.wait(2000);
  
      cy.get('.menu > .link > .icon').click()
      cy.get(':nth-child(10) > .link').click()
      
      cy.wait(5000);
      
      cy.get('#content > div > div > magic-shop')
      .shadow()
      .find('div > div > magic-ui-grid > magic-shop-item:nth-child(2)')
      .shadow()
      .find('div > div.content > div.details > magic-ui-button')
      .shadow()
      .find('button')
      .click()


      cy.wait(4000); 

 
      cy.get('#app > div.container > div > magic-ui-modal > magic-shop-details-modal')
        .shadow()
        .find('div > div.action > magic-ui-button:nth-child(1)')
        .click()
    });
  });
  
