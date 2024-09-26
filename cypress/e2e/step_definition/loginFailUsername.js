// cypress/e2e/duckduckgo.ts
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Enter the principal page", () => {
    cy.log("Hola");
    });

When("I enter incorrect username", () => {
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});

Then("I should see mensage Invalid credentials", () => {
cy.get("input[placeholder='Username']").type("Admin123")
cy.get("input[placeholder='Password']").type("admin123")
cy.get("button[type='submit']").click()
cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("be.visible").and('contain',"Invalid credentials")
    
});