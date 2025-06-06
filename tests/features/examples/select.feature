@selectPage
Feature: Select

  Scenario: Selecting option
    Given I am on the "select" page
    And I select the "130 FAKE STREET, LONDON" option of select
    Then select option for "130 FAKE STREET, LONDON" is selected
