class ensekLoginPage {
    elements = {
        loginPageHeader: () => cy.get("h2").contains("Log in."),
        loginConfirmMessage: () => cy.get("h1"),
        loginLink: () => cy.get("#loginLink").contains("Log in"),
        loginEmail: () => cy.get("#Email"),
        loginPassword: () => cy.get("#Password"),
        loginRememberMe: () => cy.get("#RememberMe"),
        loginButton: () => cy.get("[type=submit]"),
        registerNewUserLink: () => cy.get("p").find("a").contains("Register as a new user"),
        loginEmailFieldError: () => cy.get("#Email-error"),
        loginPasswordFieldError: () => cy.get("#Password-error"),
    };

    //Selecting the Login link
    selectLoginLink() {
        this.elements.loginLink().click();
    }

    //Login button sbmit
    submitLogin() {
        this.elements.loginButton().click();
    }

    //Emter email address details for Login Email 
    enterEmailLogin() {
        this.elements.loginEmail().type(Cypress.env("user_register_email"));
    }

    //Emter password details for Login Password 
    enterPasswordLogin() {
        this.elements.loginPassword().type(Cypress.env("user_register_password"));
    }

    //Selecting Remember me checkbox
    selectRememberMe() {
        this.elements.loginRememberMe().click();
    }

    //Selecting Register as a new user link
    selectResisterNewUserLink() {
        this.elements.registerNewUserLink().click();
    }
}

module.exports = new ensekLoginPage();