/// <reference types="cypress"/>

// execute this func before each block, with wait of 5000ms before failing
context('addtocart', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php',{timeout: 5000})
    })

it('TestCase003-Add-itme-to-cart', function(){

    // find element with selector and perform mousehover
    cy.get('.product_img_link',{timeout: 10000}).trigger('mouseover')
    // will show elements with mousehover
    cy.get('Add to cart').should('be.visible')
    // choose element
    cy.get('.button ajax_add_to_cart_button btn btn-default')
    .click()
    .wait(5000)
    // to match text content against a regular expression
    cy.invoke('text')
    .contains('Product successfully added to your shopping cart')
    // for closing cart pop up
    cy.get('.cross').click()
    .wait(2000)

})
})