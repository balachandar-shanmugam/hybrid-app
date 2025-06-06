@dropdownPage
Feature: Dropdown

  Scenario: Select first option from dropdown
    Given I am on the "dropdown" page
    And I select the first option for "dropdown"
    Then First option for "dropdown" is selected