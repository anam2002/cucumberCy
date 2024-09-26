# cypress/e2e/orangehrmlive.feature
Feature: opensource-demo.orangehrmlive.com

Scenario: Login with correct credencials
Given Enter the principal page
When I enter correct credentials
Then I should see the Dashboard page