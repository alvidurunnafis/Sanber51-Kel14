// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('goTo', (laman) => {
    cy.visit(laman)
})

Cypress.Commands.add('VerifyNoItemsInCart', (locator, value) => {
  cy.get(locator).should('contain', value)
})

Cypress.Commands.add('NewShippingAddress',(company, street, city, state, zip, country, phone) => {
  cy.get('[name="company"]').type(company)
  cy.get('[name="street[0]"]').type(street)
  cy.get('[name="city"]').type(city)
  cy.get('[name="region_id"]').select(state)
  cy.get('[name="postcode"]').type(zip)
  cy.get('[name="country_id"]').select(country)
  cy.get('[name="telephone"]').type(phone)
  cy.get('.modal-footer > .primary').click()
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
