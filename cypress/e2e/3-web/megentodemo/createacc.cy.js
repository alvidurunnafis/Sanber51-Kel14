describe('Create Account on Magento Site with positive and negative test cases', () => {
  const baseUrl = 'https://magento.softwaretestingboard.com/';
  it.skip('Should create an account successfully with valid details', () => {
    cy.visit(baseUrl)
    cy.contains('Create an Account').click();
    cy.get('#firstname').type('ucok')
    cy.get('#lastname').type('bengkel')
    cy.get('#email_address').type('ucokbengkel4@gmail.com');
    cy.get('#password').type('@ucokbengkel123');
    cy.get('#password-confirmation').type('@ucokbengkel123');

    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
    cy.contains('Thank you for registering with').should('be.visible');// Assertion untuk akun yang telah berhasil terdaftar

  });

  it('Should show an error if attempting to create an account with existing credentials', () => {
    cy.visit(baseUrl);
    cy.contains('Create an Account').click();

    cy.get('#firstname').type('ucok');
    cy.get('#lastname').type('bengkel');
    cy.get('#email_address').type('ucokbengkel3@gmail.com'); // Email yang sudah pernah terdaftar 
    cy.get('#password').type('@ucokbengkel123');
    cy.get('#password-confirmation').type('@ucokbengkel123');

    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();

    cy.contains('There is already an account with this email address.').should('be.visible'); // Assertion untuk pesan  pesan kesalahan untuk email yang telah digunakan atau terdaftar
  });

  it('Should display error messages for invalid form fields', () => {
    cy.visit(baseUrl)
    cy.contains('Create an Account').click();
    cy.get('#firstname').type('ucok')
    cy.get('#lastname').type('bengkel')
    cy.get('#email_address').type('ucokbengkelmail');
    cy.get('#password').type('@ucokbengkel123');
    cy.get('#password-confirmation').type('@ucokbengkel123');

    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
    // Assertion untuk pesan  pesan kesalahan untuk email yang tidak valid
    cy.get('#email_address-error').should('contain.text', 'Please enter a valid email address');
  });

  it('Should display error for weak password', () => {
    cy.visit(baseUrl);
    cy.contains('Create an Account').click();

    cy.get('#firstname').type('Andi');
    cy.get('#lastname').type('Lur');
    cy.get('#email_address').type('example@test.com');
    cy.get('#password').type('lemah'); // Kata sandi yang lemah atau pendek
    cy.get('#password-confirmation').type('lemah');

    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();

    // Assertion untuk pesan kesalahan kata sandi yang lemah
    cy.get('#password-error').should('contain.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.');
  });

  it('Should display error if attempting to create an account with invalid username', () => {
    cy.visit(baseUrl);
    cy.contains('Create an Account').click();
  
    cy.get('#firstname').type('arthur');
    cy.get('#lastname').type('morgan//');
    cy.get('#email_address').type('arthurmorgan@test.com'); 
    cy.get('#password').type('@StrongPass123');
    cy.get('#password-confirmation').type('@StrongPass123');
  
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click();
  
    // Assertion untuk pesan kesalahan nama pengguna yang invalid
    cy.get('.message-error').should('contain.text', 'Last Name is not valid!'.trim());

  });

});
