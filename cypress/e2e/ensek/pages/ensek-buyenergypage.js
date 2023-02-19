class buyEnergyPage {
    elements = {
        buyEnergyPageHeader: () => cy.get("h2").contains("Buy Energy"),
        buyEnergyTable: () => cy.get("table th"),
        resetButton: () => cy.get("[value=Reset]"),
        amountPurchased: () => cy.get("#energyType_AmountPurchased"),
        buyButton: () => cy.get("[value=Buy]"),
        buyEnergyConfirmMessage: () => cy.get("h2").contains("Sale Confirmed!"),
    };

    //Enter amount purchased 
    enterAmountPurchased() {
        this.elements.amountPurchased().click().focused().clear().type('50{enter}');
    }

    //Click Buy
    clickBuy() {
        this.elements.buyButton().first().click();
    }

    //Click Reset
    clickReset() {
        this.elements.resetButton().click();
    }

    //Check Buy Energy table of elements
    checkBuyEnergyTable() {
        const buyEnergyTableList = [
            "Energy Type",
            "Price",
            "Quanity of Units Available",
            "Number of Units Required",
            "",

        ];
        this.elements.buyEnergyTable()
            .each(($el) => {
                expect(buyEnergyTableList).to.include($el.text());
            });
    }

}

module.exports = new buyEnergyPage();