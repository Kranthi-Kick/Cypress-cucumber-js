const { AllElements } = require("./AllElements");

Cypress.Commands.add("selector", (dataTag) => {
    const finder = AllElements.get(dataTag);
    if (finder.match(/^[#.*:]/)) {
        return cy.get(finder);
    } else {
        return cy.get(`*[data-purpose="${finder}"]`);
    }
});

