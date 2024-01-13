describe('My test', ()=>{
    it('Login/logout', () => {
        const path = '/inventory';
        cy.fixture('users').then((users)=>{
            cy.visit('');
            users.forEach(user => {

                cy.login(user.username, user.password);

                cy.url().then($url => {
                    if($url.includes(path)) {
                        cy.get('.product_label').contains(user.expected).should('exist');
                        
                cy.get('.bm-burger-button').click();
                cy.get('[class="bm-item menu-item"]').contains('Logout').click();
              
                cy.url().should('include', '/index');
                    }
                    else{
                        cy.get('h3[data-test="error"]').contains(user.expected).should('exist');
                        
                        cy.get('#user-name').clear();
        
                        cy.get('#password').clear();
                    }
                })
            })
        })
    })
})