Feature: opensource-demo.orangehrmlive.com

Background: Enter website
    Given Enter the principal page

    Scenario: Login with incorrect username
    When I enter incorrect username
    Then I should see an error message


    Scenario: Login with incorrect password
    When I enter incorrect password
    Then I should see error message


    Scenario: Login with correct credencials
    When I enter correct credentials
    Then I should see the Dashboard page