class ensekRegisterPage {
    elements = {
        registerConfirmMessage: () => cy.get("h1"),
        registerationPageHeader: () => cy.get("h2").contains("Register."),
        registerationPageSubHeader: () => cy.get("h4"),
        registerLink: () => cy.get("#registerLink").contains("Register"),
        registerButton: () => cy.get("[type=submit]"),
        registerValidationError: () => cy.get(".validation-summary-errors"),
        registerEmail: () => cy.get("#Email"),
        registerPassword: () => cy.get("#Password"),
        registerConfirmPassword: () => cy.get("#ConfirmPassword"),
    };

    //Selecting the Register link
    selectRegisterLink() {
        this.elements.registerLink().click();
    }

    //Register button sbmit
    submitRegister() {
        this.elements.registerButton().click();
    }

    //Emter email address details for Register Email 
    enterEmailRegister() {
        this.elements.registerEmail().type(Cypress.env("user_register_email"));
    }

    //Emter password details for Register Password 
    enterPasswordRegister() {
        this.elements.registerPassword().type(Cypress.env("user_register_password"));
    }

    //Emter confirm password details for Register Confirm Password 
    enterConfirmPasswordRegister() {
        this.elements.registerConfirmPassword().type(Cypress.env("user_register_password"));
    }

    //Emter different confirm password details for Register Confirm Password 
    enterDifferentConfirmPasswordRegister() {
        this.elements.registerConfirmPassword().type(Cypress.env("user_register_password_notsame"));
    }
}

module.exports = new ensekRegisterPage();