# cypress/e2e/orangehrmlive.feature
Feature: opensource-demo.orangehrmlive.com

Scenario: Login with incorrect username
Given Enter the principal page
When I enter incorrect username
Then I should see mensage Invalid credentials