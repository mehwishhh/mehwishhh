/// <reference types="cypress"/>

// execute this func before each block, with wait of 5000ms before failing, this has only one block
context('emptycart', () => {
  beforeEach(() => {
      cy.visit('http://automationpractice.com/index.php',{timeout: 5000})
  })

it('this is test project', function(){

    // wait page load for 5000ms before failing
    //cy.visit('http://automationpractice.com/index.php',{timeout: 5000})
    //cy.wait(5000)
    // find element with selector and perform mousehover
    cy.get('.product_img_link',{timeout: 10000}).trigger('mouseover')
    // will show elements with mousehover
    cy.get('Add to cart').should('be.visible')
    // choose element
    cy.get('.button ajax_add_to_cart_button btn btn-default').click().wait(5000)
    // added in cart
    cy.contains('Product successfully added to your shopping cart')
    cy.get('.btn btn-default button button-medium').click()
    // removed from cart
    cy.get('.icon-trash').click()
    cy.contains('Your shopping cart is empty.', {timeout: 6000})
    // to check if there are elements/item in cart
    cy.get('.center_column')
    .find('div')
    .should(($div) => {
      if ($div.length !== 1) {
        // showing no elemet/item in cart
        throw new Error('There is no element in cart')
      }
}) 
})
})