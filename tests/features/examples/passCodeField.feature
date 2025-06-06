@passCodeFieldPage
Feature: Passcode Field

  Scenario: Passcode field displayed correctly
    Given I am on the "passCodeField" page
    Then passcode field is displayed correctly
    And passcode field label is correct
    And passcode field tooltip is correct

  Scenario: Can send only numbers
    Given I am on the "passCodeField" page
    And I send an alphanumeric string
    Then only numbers are displayed
