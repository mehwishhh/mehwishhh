/// <reference types="cypress"/>

it('TestCase002 to check already existing account', function(){

    cy.visit('http://automationpractice.com/index.php',{timeout: 5000})
    cy.wait(5000)
    cy.get('.login',{timeout: 10000}).click()
    cy.get('email_create').type('useralreadyexists@email.com')
    // through element class and id
    cy.get('.submit')
    .find('SubmitCreate')
    .click()
    cy.wait(2000)
    // validate text 
    cy.contains('An account using this email address has already been registered. Please enter a valid password or request a new one.')
    // alternative command to validate text
    cy.get('.form_content clearfix').should('have.text', 'this email address has already been registered');

})