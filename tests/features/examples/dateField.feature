@dateFieldPage
Feature: Date field

  Scenario: Date field component displayed correctly
    Given I am on the "dateField" page
    Then date field label is displayed correctly
    And date field supportive text is displayed correctly
    And date field tooltip is displayed correctly
    And date field day input is displayed correctly

  Scenario: Can enter date for date field
    Given I am on the "dateField" page
    When I enter the day for date field
    And I enter the month for date field
    And I enter the year for date field
    Then date field day is correct
    And date field month is correct
    And date field year is correct
