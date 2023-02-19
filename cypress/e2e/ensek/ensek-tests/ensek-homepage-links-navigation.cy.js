const ensekHomePageLinks = require("../pages/ensek-homelinks-navigationpage")

describe('Verify Ensek Home page links', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    //Verify the Ensek Home Page links
    context("Ensek Home Page: Links", () => {
        //Selecting the Buy Energy link
        it("Verify the User User navigated to Buy Energy page after selecting the Buy Energy link", () => {
            ensekHomePageLinks.selectBuyEnergyLink();
            cy.url().should("include", Cypress.env("ensek-buyenergy-url"));
            console.log("User navigated to Buy Energy page after selecting the Buy Energy");

        });

        //Selecting the Sell Energy link
        it("Verify the User User navigated to Sell Energy page after selecting the Sell Energy link", () => {
            ensekHomePageLinks.selectSellEnergyLink();
            cy.url().should("include", Cypress.env("ensek-sellenergy-url"));
            console.log("User navigated to Sell Energy page after selecting the Sell Energy");

        });

        //Selecting the Learn More link
        it("Verify the User User navigated to About page after selecting the Learn More link", () => {
            ensekHomePageLinks.selectLearnMoreLink();
            cy.url().should("include", Cypress.env("ensek-about-url"));
            console.log("User navigated to About page after selecting the Learn More");
        });
    });
});