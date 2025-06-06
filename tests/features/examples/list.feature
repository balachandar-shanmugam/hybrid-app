@listPage
Feature: List

  Scenario: List displayed correctly
    Given I am on the "list" page
    Then list is displayed correctly
    And list length is "7"
    And first list item text is "This is a default list item."
