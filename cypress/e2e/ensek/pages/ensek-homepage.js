class ensekHomePage {
    elements = {
        ensekHomePageText: () => cy.get("h1"),
        navigationBarMenuItems: () => cy.get(".navbar-collapse.collapse").find("li"),
    };
}

module.exports = new ensekHomePage();