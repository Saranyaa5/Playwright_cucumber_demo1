Feature: User Authentication tests

Background:
    Given User navigates to the application
    And User click on the login link

Scenario: Login should be success
    Given User enter the username as "Sara@123"
    And User enter the password as "Sara@123"
    When User click on the login button
    Then Login should be success

Scenario: Login should be failed
    Given User enter the username as "Sara@123"
    And User enter the password as ""
    When User click on the login button
    Then Login should fail