class Button{
	btnForgetPass = '#form-validate > .actions-toolbar > div.primary > .action'
	btnSignIn = '.panel > .header > .authorization-link'
	btnLogin = '.action.login.primary'
    showcart = '.showcart'
    proceedToCheckout = '.action.primary.checkout'
    next = '.button'
    placeOrder = '.payment-method-content > :nth-child(4) > div.primary > .action'
    continueShopping = '.checkout-success > .actions-toolbar > div.primary > .action'
    viewAndEditCart = ':nth-child(7) > .secondary > .action > span'
    checkout = '.checkout-methods-items > :nth-child(1) > .action'
    newAddress = '.new-address-popup > .action'

    clickConfirm(){
        cy.get(this.btnForgetPass).click()
    }
    clickSignIn(){
        cy.get(this.btnSignIn).click()
    }
	clickLogin(){
        cy.get(this.btnLogin).click()
        cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Welcome, ')
    }
    clickShowcart(){
        cy.get(this.showcart).click()
        cy.wait(5000)
    }
    clickProceedtoCheckout(){
        cy.get(this.proceedToCheckout).click({force: true})
        cy.wait(5000)    
        cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping')
        cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#shipping')
        cy.wait(5000)
        cy.get('#shipping > .step-title').should('contain', 'Shipping Address')
    }
    clickNext(){
        cy.get(this.next).click({force: true})
        cy.get('.payment-group > .step-title').should('contain', 'Payment Method')
        cy.wait(5000)
    }
    clickPlaceOrder(){
        cy.get(this.placeOrder).click({force: true})
        cy.get('.base').should('contain', 'Thank you for your purchase!')
        cy.wait(5000)
    }
    clickContinueShopping(){
        cy.get(this.continueShopping).click({force: true})
    }
    clickNewAddress(){
        cy.get(this.newAddress).click({force: true})
        cy.wait(5000)
    }
    clickViewAndEditCart(){
        cy.get(this.viewAndEditCart).click({force: true})
        cy.wait(5000)
    }
    clickCheckout(){
        cy.get(this.checkout).click({force: true})
        cy.wait(5000)    
        cy.visit('https://magento.softwaretestingboard.com/checkout/#shipping')
        cy.url().should('include', 'https://magento.softwaretestingboard.com/checkout/#shipping')
        cy.wait(5000)
    }
    
}
export default new Button()
