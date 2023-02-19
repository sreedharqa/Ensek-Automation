class findOutMorePage {
    elements = {
        buyEnergyLink: () => cy.get("p").find("a").contains("Buy energy »"),
        sellEnergyLink: () => cy.get("p").find("a").contains("Sell energy »"),
        learnMoreLink: () => cy.get("p").find("a").contains("Learn more »"),
    };

    //Selecting the Buy Energy link
    selectBuyEnergyLink() {
        this.elements.buyEnergyLink().click();
    }

    //Selecting the Sell Energy link
    selectSellEnergyLink() {
        this.elements.sellEnergyLink().click();
    }

    //Selecting the Learn More link
    selectLearnMoreLink() {
        this.elements.learnMoreLink().click();
    }

}

module.exports = new findOutMorePage();