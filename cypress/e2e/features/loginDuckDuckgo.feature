# cypress/e2e/duckduckgo.feature
Feature: duckduckgo.com

Scenario: visiting the frontpage
Given Enter the principal page
When I visit duckduckgo.com
Then I should see a search bar