@memorableDateFieldPage
Feature: Memorable date field
  
  Scenario: Memorable date field component displayed correctly
    Given I am on the "memorableDateField" page
    Then memorable date field label is displayed correctly
    And memorable date field supportive text is displayed correctly
    And memorable date field day label is displayed correctly
    And memorable date field month label is displayed correctly
    And memorable date field year label is displayed correctly

  Scenario: Can enter memorable date
    Given I am on the "memorableDateField" page
    When I enter the day for memorable date
    And I enter the month for memorable date
    And I enter the year for memorable date
    Then memorable date day is correct
    And memorable date month is correct
    And memorable date year is correct
