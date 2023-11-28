class Button{
	btnForgetPass = '#form-validate > .actions-toolbar > div.primary > .action'
	btnSignIn = '.panel > .header > .authorization-link'
	btnLogin = '.action.login.primary'
    showcart = '.showcart'
    proceedToCheckout = '.action.primary.checkout'
    viewAndEditCart = ':nth-child(7) > .secondary > .action > span'
    checkout = '.checkout-methods-items > :nth-child(1) > .action'

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