# cypress/e2e/orangehrmlive.feature
Feature: opensource-demo.orangehrmlive.com

Scenario: Login with incorrect password
Given Enter the principal page
When I enter incorrect password
Then I should see mensage Invalid credentials