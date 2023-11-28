import data from '../../../fixtures/UserData.json'
import button from '../../../support/pageObject/button-checkout'
import toLogin from '../../../support/pageObject/toLogin'

describe('Verify Magento Checkout Product - Successful', () => {
    it('Proceed Checkout When Click Button "Proceed to Checkout" and Use The Shipping Address Provided - Successful', () => {
    cy.goTo('')
    button.clickSignIn()
    toLogin.login(data.validData.validUser2, data.validData.validPass2)
    button.clickLogin()
    button.clickShowcart()
    button.clickProceedtoCheckout()
    button.clickNext()
    button.clickPlaceOrder()
    button.clickContinueShopping()
  })
  it('Proceed Checkout When Click Button "Proceed to Checkout" and New Shipping Address - Successful', () => {
    cy.goTo('')
    button.clickSignIn()
    toLogin.login(data.validData.validUser2, data.validData.validPass2)
    button.clickLogin()
    button.clickShowcart()
    button.clickProceedtoCheckout()
    button.clickNewAddress()
    cy.NewShippingAddress('Home', 'Jl. Hts', 'Malang', 'Florida', '135798', 'Indonesia', '085678234567')
  })
  it.only('Proceed Checkout When Click "View and Edit Cart" - Successful', () => {
    cy.goTo('')
    button.clickSignIn()
    toLogin.login(data.validData.validUser2, data.validData.validPass2)
    button.clickLogin()
    button.clickShowcart()
    button.clickViewAndEditCart()
    button.clickCheckout()
    button.clickNext()
    button.clickPlaceOrder()
    button.clickContinueShopping()
  })
  
})

describe('Verify Magento Checkout Product - Failed', () => {
  it('Proceed Checkout When No Items In Shopping Cart - Failed', () => {
    cy.goTo('')
    button.clickSignIn()
    toLogin.login(data.validData.validUser2, data.validData.validPass2)
    button.clickLogin()
    button.clickShowcart()
    cy.VerifyNoItemsInCart('.subtitle', 'You have no items in your shopping cart.')
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
