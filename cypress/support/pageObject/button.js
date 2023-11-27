class Button{
	btnForgetPass = '#form-validate > .actions-toolbar > div.primary > .action'
	btnSignIn = '.panel > .header > .authorization-link'
	btnLogin = '.action.login.primary'
    btnAddToCart = '#product-addtocart-button'
    product = ':nth-child(5) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo'
    clickConfirm(){
        cy.get(this.btnForgetPass).click()
    }
    clickSignIn(){
        cy.get(this.btnSignIn).click()
    }
	clickLogin(){
        cy.get(this.btnLogin).click()
    }
    clickAdd(){
        cy.get(this.btnAddToCart).click()
    }
    clickProduct(){
        cy.get(this.product).click()
    }
}
export default new Button()