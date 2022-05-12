/// <reference types="cypress"/>

// execute this func before each block, with wait of 5000ms before failing, this TC has only one block
context('addremovetocart', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php',{timeout: 5000})
    })

it('TestCase004 add remove from cart', function(){

    // find element with selector and perform mousehover
    cy.get('.product_img_link',{timeout: 10000}).trigger('mouseover')
    // will show elements with mousehover
    cy.get('Add to cart').should('be.visible')
    // choose element
    cy.get('.button ajax_add_to_cart_button btn btn-default').click().wait(5000)
    // added in cart
    cy.contains('Product successfully added to your shopping cart')
    cy.get('.btn btn-default button button-medium').click()
    // remove from cart
    cy.get('.icon-trash').click()
    // empty cart
    cy.contains('Your shopping cart is empty.', {timeout: 6000})
   })
})
