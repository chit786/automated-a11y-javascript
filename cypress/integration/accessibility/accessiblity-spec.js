describe("HomePage", () => {
    beforeEach(() => {
        cy.visit("home");
        cy.get('a:contains("Start Hiring")');
        cy.injectAxe();
    });
    
    it("should be accesible", () => {
        // in first argument you can pass a locator
        // more details about the first 3 arguments can be found at : https://www.deque.com/axe/axe-for-web/documentation/api-documentation/#parameters-axerun
        cy.checkA11y(null, null, null, Cypress.env('a11y').skipFailures);
    });
});