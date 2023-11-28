import button from '../../support/pageObject/button';
import toLogin from '../../support/pageObject/toLogin';
let data = require('../../fixtures/userData.json');

describe('Verify Choose Product Functionality', () => {
    it('Success Add One Item', () => {
        cy.goTo('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
        button.clickSignIn()
        toLogin.login(data.validData.validUser, data.validData.validPass)
        button.clickLogin()
        button.clickProduct()
        button.clickAdd()
    })

    it('Success Add 15 Same Item', () => {
        cy.goTo('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
        button.clickSignIn()
        toLogin.login(data.validData.validUser, data.validData.validPass)
        button.clickLogin()
        button.clickProduct()
        cy.get('#qty').type('5')
        button.clickAdd()
    })

    it('Failed Add Wishlist Item', () => {
        cy.goTo('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
        button.clickSignIn()
        toLogin.login(data.validData.validUser, data.validData.validPass)
        button.clickLogin()
        button.clickProduct()
        cy.get('.action.towishlist').click()
        cy.get('.message-error > div').should('contain', 'Invalid Form Key')
    })

    it('Failed Add to Comparing Item', () => {
        cy.goTo('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
        button.clickSignIn()
        toLogin.login(data.validData.validUser, data.validData.validPass)
        button.clickLogin()
        button.clickProduct()
        cy.get('.action.tocompare').click()
        cy.get('.message-error > div').should('contain', 'Invalid Form Key')
    })

    it('Success Choose Other Product in Detail Product Page', () => {
        cy.goTo('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
        button.clickSignIn()
        toLogin.login(data.validData.validUser, data.validData.validPass)
        button.clickLogin()
        button.clickProduct()
        cy.get('.product-item-link').click()
        button.clickAdd()
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})