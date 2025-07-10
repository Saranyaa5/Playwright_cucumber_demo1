Feature: User Authentication tests

Background:
    Given User navigates to the application
    And User click on the login link

Scenario: Login should be success
    When User logs in with all credentials from JSON
    When User click on the login button
    Then Login should be success


# Scenario: Login should be failed
#     When User logs in with all credentials from JSON
#     When User click on the login button
#     Then Login should fail