let data = require('../../fixtures/userData.json')

describe('Verify Choose Product Functionality', () => {
    it('Success Add One Item', () => {
      cy.goto('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
      cy.get('.panel > .header > .authorization-link').click()
      cy.get('#email').type(data.validData.validUser)
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(data.validData.validPass)
      cy.get('.action.login.primary').click()
      cy.get(':nth-child(5) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
      cy.get('#product-addtocart-button').click()
    })
    it('Success Add 15 Same Item', () => {
        cy.goto('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
        cy.get('.panel > .header > .authorization-link').click()
        cy.get('#email').type(data.validData.validUser)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(data.validData.validPass)
        cy.get('.action.login.primary').click()
        cy.get(':nth-child(5) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('#qty').type('5')
        cy.get('#product-addtocart-button').click()
      })
      it('Success/Failed Add Wishlist Item', () => {
        cy.goto('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
        cy.get('.panel > .header > .authorization-link').click()
        cy.get('#email').type(data.validData.validUser)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(data.validData.validPass)
        cy.get('.action.login.primary').click()
        cy.get(':nth-child(5) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('.action.towishlist').click()
        if ('.page.message.message-error') {
            cy.get('.message-error > div').should('contain', 'Invalid Form Key')
        } else {
            cy.get('.message-success > div').should('contain', 'You added')
        }
      }) 
      it('Failed/Success Add to Comparing Item - Invalid Form Key', () => {
        cy.goto('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
        cy.get('.panel > .header > .authorization-link').click()
        cy.get('#email').type(data.validData.validUser)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(data.validData.validPass)
        cy.get('.action.login.primary').click()
        cy.get(':nth-child(5) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('.action.tocompare').click()
        if ('.page.message.message-error') {
            cy.get('.message-error > div').should('contain', 'Invalid Form Key')
        } else {
            cy.get('.message-success > div').should('contain', 'You added')
        }
      })
      it('Success Choose Other Product in Detail Product Page', () => {
        cy.goto('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
        cy.get('.panel > .header > .authorization-link').click()
        cy.get('#email').type(data.validData.validUser)
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(data.validData.validPass)
        cy.get('.action.login.primary').click()
        cy.get(':nth-child(5) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('.product-item-link').click()
        cy.get('#product-addtocart-button').click()
      })
})
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })