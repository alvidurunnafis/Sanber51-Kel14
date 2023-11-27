class ToLogin{
	uname = '#email'
	pass = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
	login(name, pwd){
		cy.get(this.uname).type(name)
		cy.get(this.pass).type(pwd)
	}
}
export default new ToLogin()