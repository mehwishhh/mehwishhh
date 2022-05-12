/// <reference types="cypress"/>

it('TestCase001 To register account', function(){
    // visit site
    cy.visit('http://automationpractice.com/index.php',{timeout: 5000})
    cy.wait(5000)
    cy.get('.login',{timeout: 10000}).click()
    // enter credentials
    cy.get('email_create').type('test@email.com')
    cy.get('SubmitCreate').click()
    // verify success code
    cy.wait('5000').its('response.statusCode').should('be.oneOf', [200, 201])
    
})