Feature:User Authentication tests

Background:
    Given User navigates to the application
    And User click on the login link

Scenario: Login should be succsess
    Given User enter the username as "Sara@123"
    And the user enter the password as "Sara@123"
    When User click on the login button
    Then Login should be successful

Scenario:Login should not succsess
    Given User enter the username as "Sara@123"
    And the user enter the password as ""
    When User click on the login button
    Then Login should fail

# https://bookcart.azurewebsites.net/