// cypress/e2e/duckduckgo.ts
import { should } from "chai";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Enter the principal page", () => {
    cy.log("Hola");
    });

When("I enter correct credentials", () => {
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

Then("I should see the Dashboard page", () => {
cy.get("input[placeholder='Username']").type("Admin")
cy.get("input[placeholder='Password']").type("admin123")
cy.get("button[type='submit']").click()
cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("be.visible").and('contain',"Dashboard")
});
