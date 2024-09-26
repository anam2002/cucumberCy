// cypress/e2e/duckduckgo.ts
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Enter the principal page", () => {
    cy.log("Hola");
    });

When("I visit duckduckgo.com", () => {
cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
cy.get("#searchbox_input").should(
"have.attr",
"placeholder",
"Search without being tracked"
);
});