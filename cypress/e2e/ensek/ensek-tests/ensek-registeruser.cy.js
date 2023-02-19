const ensekRegisterPage = require("../pages/ensek-registerpage")

describe('Verify Ensek User Registration Page', () => {
  beforeEach(() => {
    cy.visit("/Account/Register");
  });

  //Verify the User Registration link
  context("Ensek : Registration Page", () => {

    //Verify the User Registration is not successful when none of the details entered
    it("Verify Ensek User Registration is not successful, when user not entering all the mandatory details", () => {
      ensekRegisterPage.selectRegisterLink();
      ensekRegisterPage.submitRegister();
      ensekRegisterPage.elements.registerValidationError().first().should("be.visible");
    });

    //Verify the User Registration is not successful when passwords doesn't match
    it("Verify Ensek User Registration is not successful, when user enters password and confirm password not same", () => {
      ensekRegisterPage.selectRegisterLink();
      ensekRegisterPage.enterEmailRegister();
      ensekRegisterPage.enterPasswordRegister();
      ensekRegisterPage.enterDifferentConfirmPasswordRegister();
      ensekRegisterPage.submitRegister();
      ensekRegisterPage.elements.registerValidationError().first().should("contain", Cypress.env("password-not-match-error"));
    });

    //Verify the User Registration is successful
    it("Verify Ensek User Registration is successful", () => {
      ensekRegisterPage.selectRegisterLink();
      ensekRegisterPage.enterEmailRegister();
      ensekRegisterPage.enterPasswordRegister();
      ensekRegisterPage.enterConfirmPasswordRegister();
      ensekRegisterPage.submitRegister();
      ensekRegisterPage.elements.registerConfirmMessage().first().should("contain", Cypress.env("register-success-confirmation"));
    });
  });
});