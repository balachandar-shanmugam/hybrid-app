@radioButtonGroupPage
Feature: Radio button group

  Scenario: Radio button group displayed correctly
    Given I am on the 'radioButtonGroup' page
    Then radioButtonGroup is displayed correctly
    And radioButtonGroup label is correct
    And radioButtonGroup tooltip is correct

  Scenario: Option can be selected by name
    Given I am on the 'radioButtonGroup' page
    When I select the Miss option by text
    Then The Miss option is selected

  Scenario: Option can be selected by index
    Given I am on the 'radioButtonGroup' page
    When I select the Dr option by index
    Then The Dr option is selected
