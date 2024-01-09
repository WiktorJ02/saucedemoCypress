describe('Login tests', () => {
  let data;
  before(()=>{
    cy.fixture('validUser').then((saucedemo)=>{
      data = saucedemo;
    })
  })

  it('Valid user login', () => {
    cy.visit('');
    cy.url().should('include', '/v1');

    cy.get('[id="user-name"]').type(data.validUser);   
    cy.get('#password').type(data.password);
    cy.get('.btn_action').click();
  
    cy.url().should('contain', 'inventory');
    cy.get('.product_label').contains(data.expected).should('exist');
  
    cy.get('.bm-burger-button').click();
    cy.get('[class="bm-item menu-item"]').contains('Logout').click();
  
    cy.url().should('include', '/v1');
  })  
})