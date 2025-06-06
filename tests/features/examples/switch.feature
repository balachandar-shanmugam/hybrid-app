@switchPage
Feature: Switch

  Scenario: Switch displayed correctly
    Given I am on the "switch" page
    Then Switch is displayed correctly
    And Switch label is displayed correctly

  Scenario: Option selected
    Given I am on the "switch" page
    When I select the no option
    Then The no option is selected
    And The yes option is not selected

  Scenario: Switch tooltip displayed correctly
    Given I am on the "switch" page
    Then switch tooltip is displayed correctly
    And switch tooltip is closed

  Scenario: Can expand switch tooltip
    Given I am on the "switch" page
    When I expand the switch tooltip
    Then Switch tooltip is expanded
    And Expanded switch tooltip content is correct
