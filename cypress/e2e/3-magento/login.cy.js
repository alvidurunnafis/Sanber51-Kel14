let data = require('../../fixtures/userData.json')
import button from '../../support/pageObject/button'
import toLogin from '../../support/pageObject/toLogin'

describe('Verify Magento Login Functionality', () => {
  it('Success Login', () => {
    cy.goTo('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
    button.clickSignIn()
    toLogin.login(data.validData.validUser, data.validData.validPass)
    button.clickLogin()
    cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Welcome')
  })
  it('Failed Login - Password Incorrect', () => {
    cy.goTo('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
    button.clickSignIn()
    toLogin.login(data.validData.validUser, data.invalidData.invalidPass)
    button.clickLogin()
    cy.get('.message-error > div').should('contain', 'sign-in was incorrect')
  })
  it('Failed Login - Email Incorrect', () => {
    cy.goTo('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
    button.clickSignIn()
    toLogin.login(data.validData.validUser, data.invalidData.invalidUser)
    button.clickLogin()
    cy.get('.message-error > div').should('contain', 'sign-in was incorrect')
  })
  it('Forget Password', () => {
    cy.goTo('https://magento.softwaretestingboard.com/') // CUSTOM COMMAND
    button.clickSignIn()
    cy.get(toLogin.uname).type(data.validData.validUser)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span').click()
    cy.get(toLogin.email).type(data.validData.validUser)
    button.clickConfirm()
    cy.get('.message-success > div').should('contain', 'will receive an email with a link to reset your password')
  })
})
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
