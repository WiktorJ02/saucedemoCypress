describe('Valid User Tests', () => {
  let data;
  before(()=>{
    cy.fixture('validUser').then((saucedemo)=>{
      data = saucedemo;
    })
  })

  it('Web tests', () => {
    cy.visit('');
    cy.url().should('eq', 'https://www.saucedemo.com/v1/');

    cy.login(data.validUser, data.password);
  
    cy.url().should('contain', 'inventory');
    cy.get('.product_label').contains(data.expected).should('exist');
  
    cy.clickLink('Sauce Labs Bolt T-Shirt');
  })  
})