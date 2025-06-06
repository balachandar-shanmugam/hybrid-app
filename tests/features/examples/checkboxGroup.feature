@checkboxGroupPage
Feature: Checkbox Group

  Scenario: Checkbox group displayed correctly
    Given I am on the "checkboxGroup" page
    Then Checkbox group is displayed
    
  Scenario: All checkboxes selected
    Given I am on the "checkboxGroup" page
    And I tick all the checkboxes
    Then All the checkboxes are ticked

  Scenario: The checkbox group tooltip is displayed correctly
    Given I am on the "checkboxGroup" page
    Then Checkboxgroup tooltip is displayed correctly
    And Checkboxgroup tooltip is closed
    
  Scenario: The checkbox group tooltip expands with correct content
    Given I am on the "checkboxGroup" page
    And I expand the checkboxgroup tooltip
    Then Checkboxgroup tooltip is expanded
    And Expanded checkboxgroup tooltip content is correct
