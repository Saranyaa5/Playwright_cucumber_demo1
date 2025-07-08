Feature:User Authentication tests

Background:
    Given User navigates to the application
    And User click on the login link

Scenario: search books after login
    Given User enter the username as "<username>"
    And the user enter the password as "<password>"
    When User click on the login button
    When the user searches for a "<book>"
    When the user add the book to the cart
    Then the cart badge should get updated

Examples:
    |username|password|book|
    |Sara@123|Sara@123|Java|
    |Sara@123|Sara@123|Python|