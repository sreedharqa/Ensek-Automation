const buyEnergyPage = require("../pages/ensek-buyenergypage")
const ensekHomePageLinks = require("../pages/ensek-homelinks-navigationpage")

describe('Verify Buy Energy Page', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    //Verify the Buy Energy
    context("Ensek : Buy Energy Page", () => {
        //Selecting the Buy Energy link
        it("Verify the User User navigated to Buy Energy page after selecting the Buy Energy link", () => {
            ensekHomePageLinks.selectBuyEnergyLink();
            buyEnergyPage.elements.buyEnergyPageHeader().first().should("be.visible");
            console.log("Buy Energy page visible");
        });

        //Verify the Buy Energy table
        it("Verify the Buy Energy table of elements exist", () => {
            ensekHomePageLinks.selectBuyEnergyLink();
            buyEnergyPage.checkBuyEnergyTable();
        });

        //Verify Reset button
        it("Verify the Reset button functionality", () => {
            ensekHomePageLinks.selectBuyEnergyLink();
            buyEnergyPage.enterAmountPurchased();
            buyEnergyPage.clickReset();
            buyEnergyPage.elements.amountPurchased().first().should("have.value", "0");
        });

        //Verify Buy energy
        it("Verify the Buy Energy functionality", () => {
            ensekHomePageLinks.selectBuyEnergyLink();
            buyEnergyPage.enterAmountPurchased();
            buyEnergyPage.clickBuy();
            buyEnergyPage.elements.buyEnergyConfirmMessage().first().should("be.visible");
        });
    });
});