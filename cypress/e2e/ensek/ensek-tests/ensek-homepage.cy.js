const ensekHomePage = require("../pages/ensek-homepage")

describe('Verify Ensek Home Page', () => {
    let data;
    beforeEach(() => {
        cy.visit("/");
        cy.fixture("ensek-data.json").then((fData) => {
            data = fData;
        });
    });

    //Verify user navigate to the Ensek Home page
    context("Ensek Homepage: Access Homepage", () => {
        it("Verify Ensek Home Page is visible", () => {
            ensekHomePage.elements.ensekHomePageText().should("be.visible");
        });

        //Verify Ensek Home Main Navigation Menu Items count
        it("Verify the number of Menu Items", () => {
            //Verify total main menu items exist in the page
            ensekHomePage.elements.navigationBarMenuItems().should("have.length", 5);
        });

        //Verify Ensek Home Main Navigation Menu Items names
        it("Verify Menu Items Names are correct", () => {
            //Verify total main menu items exist in the page
            const mainMenuItemNames = [
                "Home",
                "About",
                "Contact",
                "Register",
                "Log in",

            ];
            ensekHomePage.elements.navigationBarMenuItems()
                .each(($el) => {
                    expect(mainMenuItemNames).to.include($el.text());
                });
        });
    });
});
