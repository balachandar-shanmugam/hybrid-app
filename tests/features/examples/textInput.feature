@textInputPage
Feature: Text input

  Scenario: Send values to text input
    Given I am on the "textInput" page
    And text input box is enabled
    When I send a value to the text input
    Then value is in the text input box
  
  Scenario: Clear text input
    Given I am on the "textInput" page
    And text input box is enabled
    When I send a value to the text input
    And I clear the text input box
    # Then The text input box is empty