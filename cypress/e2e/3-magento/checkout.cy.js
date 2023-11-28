import data from '../../../fixtures/UserData.json'
import button from '../../../support/pageObject/button-checkout'
import toLogin from '../../../support/pageObject/toLogin'

describe('Verify Magento Checkout Product', () => {
  
  it('Proceed Checkout When Click Button "Proceed to Checkout" - Successful', () => {
    cy.goTo('')
    button.clickSignIn()
    toLogin.login(data.validData.validUser, data.validData.validPass)
    button.clickLogin()
    button.clickShowcart()
    button.clickProceedtoCheckout()
    cy.ShippingAddress('Home', 'Jl. Merdeka', 'Malang', 'Alaska', '123456', 'Indonesia', '086543456765')
    
  })

  it.only('Verify Shopping Address Is Empty - Failed', () => {
    cy.goTo('')
    button.clickSignIn()
    toLogin.login(data.validData.validUser, data.validData.validPass)
    button.clickLogin()
    button.clickShowcart()
    button.clickProceedtoCheckout()
    cy.ShippingAddress('', '', '', 'Alaska', '', 'Indonesia', '')
    cy.VerifyShippingMethods('.message > span', 'The shipping method is missing.')
  })

  it('Verify Shopping Methods Is Empty - Failed', () => {
    cy.goTo('')
    button.clickSignIn()
    toLogin.login(data.validData.validUser, data.validData.validPass)
    button.clickLogin()
    button.clickShowcart()
    button.clickProceedtoCheckout()
    cy.ShippingAddress('Home', 'Jl. Merdeka', 'Malang', 'Alaska', '123456', 'Indonesia', '086543456765')
    
  })

  it('Proceed Checkout When Click "View and Edit Cart" - Successful', () => {
    cy.goTo('')
    button.clickSignIn()
    toLogin.login(data.validData.validUser, data.validData.validPass)
    button.clickLogin()
    button.clickShowcart()
    button.clickViewAndEditCart()
    button.clickCheckout()
    
    
    
  })

  
})
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})