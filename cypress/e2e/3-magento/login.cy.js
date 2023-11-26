let data = require('../../fixtures/userData.json')

describe('Verify Magento Login Functionality', () => {
  it('Success Login', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link').click()
    cy.get('#email').type(data.validData.validUser)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(data.validData.validPass)
    cy.get('.action.login.primary').click()
    cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Welcome')
  })
  it('Failed Login - Password Incorrect', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link').click()
    cy.get('#email').type(data.validData.validUser)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(data.invalidData.invalidPass)
    cy.get('.action.login.primary').click()
    cy.get('.message-error > div').should('contain', 'sign-in was incorrect')
  })
  it('Failed Login - Email Incorrect', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link').click()
    cy.get('#email').type(data.invalidData.invalidUser)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type(data.validData.validPass)
    cy.get('.action.login.primary').click()
    cy.get('.message-error > div').should('contain', 'sign-in was incorrect')
  })
  it('Forget Password', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link').click()
    cy.get('#email').type(data.validData.validUser)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span').click()
    cy.get('#email_address').type(data.validData.validUser)
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.get('.message-success > div').should('contain', 'will receive an email with a link to reset your password')
  })
})
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
