@textFieldPage
Feature: Textfield

  Scenario: Textfield displayed correctly
    Given I am on the "textField" page
    Then textfield is displayed correctly
    And textfield label is correct
    And textfield tooltip is correct

  Scenario: Can send input to text field
    Given I am on the "textField" page
    And text field box is enabled
    When I input a string to the text field
    Then string is in the text field

  Scenario: Can clear text field
    Given I am on the "textField" page
    When I input a string to the text field
    And I clear the text field
    Then text field is empty
