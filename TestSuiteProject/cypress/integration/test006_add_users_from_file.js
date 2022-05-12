/// <reference types="cypress" />

// load json fixture file containing user test data
// fixture files contains static set of test data
const requiredExample = require('../../fixtures/users')

context('Users from Files', () => {
  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
  })

  beforeEach(() => {
    // load file
    cy.fixture('users.json').as('users')
  })

  it('cy.readFile() - read file contents', () => {

    // reads a file
    cy.readFile('users.json').then((json) => {
      expect(json).to.be.an('object')
    })
    // enter data
    cy.get('.is_required validate account_input form-control').type(users[0].email)
    cy.get('passwd').type(users[1].password)
    cy.get('SubmitLogin').click()
    // authentication failed if incorrect credentials are enetered and/or user does not exist if unregistered/incorrect credentials are enetered, depending on the test data in json file
    // failed attempt
    cy.contains('Authentication failed.').wait(2000)
  })

  })
