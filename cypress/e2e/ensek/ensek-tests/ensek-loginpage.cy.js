const ensekRegisterPage = require("../pages/ensek-registerpage")
const ensekLoginPage = require("../pages/ensek-loginpage")

describe('Verify Ensek Login Page', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    //Verify the User Login link
    context("Ensek : Login Page", () => {
        //Verify the User User navigated to Login page after selecting the Login menu link
        it("Verify the User navigated to Login page after selecting the Login menu link", () => {
            ensekLoginPage.selectLoginLink();
            ensekLoginPage.elements.loginPageHeader().first().should("be.visible");
            console.log("Login page visible");
        });

        //Verify the User Login is not successful when Email / Password missing
        it("Verify the User Login not successful, when email / password missing", () => {
            ensekLoginPage.selectLoginLink();
            ensekLoginPage.submitLogin();
            ensekLoginPage.elements.loginEmailFieldError().first().should("be.visible");
            ensekLoginPage.elements.loginPasswordFieldError().first().should("be.visible");
        });

        //Verify the User is navigated to Register page
        it("Verify the User is navigated to Register page, when select Register as a new user link", () => {
            ensekLoginPage.selectLoginLink();
            ensekLoginPage.selectResisterNewUserLink();
            ensekRegisterPage.elements.registerationPageHeader().first().should("be.visible");
            ensekRegisterPage.elements.registerationPageSubHeader().should("contain", Cypress.env("registerpage-subhead-text"));
        });

        //Verify the User Login is successful
        it("Verify Ensek User Login is successful", () => {
            ensekLoginPage.selectLoginLink();
            ensekLoginPage.enterEmailLogin();
            ensekLoginPage.enterPasswordLogin();
            ensekLoginPage.selectRememberMe();
            ensekLoginPage.submitLogin();
            ensekLoginPage.elements.loginConfirmMessage().first().should("contain", Cypress.env("login-success-confirmation"));
        });
    });
});