class sellEnergyPage {
    elements = {
        sellEnergyPageHeader: () => cy.get("h2").contains("Here to sell some energy?"),
    }; 

}

module.exports = new sellEnergyPage();