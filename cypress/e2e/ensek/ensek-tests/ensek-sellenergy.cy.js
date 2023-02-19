const sellEnergyPage = require("../pages/ensek-sellenergypage")
const ensekHomePageLinks = require("../pages/ensek-homelinks-navigationpage")

describe('Verify Sell Energy Page', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    //Verify the Sell Energy
    context("Ensek : Sell Energy Page", () => {
        //Selecting the Sell Energy link
        it("Verify the User navigated to Sell Energy page after selecting the Sell Energy link", () => {
            ensekHomePageLinks.selectSellEnergyLink();
            sellEnergyPage.elements.sellEnergyPageHeader().first().should("be.visible");
            console.log("Sell Energy page visible");
        });
    });
});