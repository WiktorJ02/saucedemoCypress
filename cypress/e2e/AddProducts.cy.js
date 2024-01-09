describe('TestSuite', ()=> {
    it('Add all products', () => {
        cy.visit('')      
    
        cy.url().should('include', '/v1')
    
        cy.get('.login_logo').should('exist')
        .and('be.visible')
    
        cy.get('.bot_column').should('exist')
        .and('be.visible')
    
        cy.get('[id="user-name"]').type('standard_user')
        
        cy.get('[id="password"]').type('secret_sauce')
    
        cy.get('[id="login-button"]').click()
    
        cy.url().should('include', '/v1/inventory')
    
        cy.get('.app_logo').should('exist')
        .and('be.visible')
    
        cy.get('[class = "btn_primary btn_inventory"]').wait(1).click({ multiple: true, force: true, })
    
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').contains('6').should('exist')
      })
})
    
