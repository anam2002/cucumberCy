# cypress/e2e/orangehrmlive.feature
Feature: opensource-demo.orangehrmlive.com

Scenario: Login with incorrect username
Given Enter the principal page
When I enter incorrect username
Then I should see message Invalid credentials


Scenario: Login with incorrect password
Given Enter the principal page
When I enter incorrect password
Then I should see an error message


Scenario: Login with correct credencials
Given Enter the principal page
When I enter correct credentials
Then I should see the Dashboard page