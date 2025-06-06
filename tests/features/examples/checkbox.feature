@checkboxPage
Feature: Checkbox

  Scenario: Checkbox displayed correctly
      Given I am on the "checkbox" page
      Then Checkbox is displayed
      And Checkbox is not selected
      And Checkbox text is correct

  Scenario: Checkbox can be selected
      Given I am on the "checkbox" page
      When I tick the checkbox
      Then Checkbox is ticked
