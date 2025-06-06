@genderFieldPage
Feature: Gender field

  Scenario: Option can be selected
    Given I am on the "genderField" page
    And gender field is displayed correctly
    When I select the Male option
    Then Male option is selected
    And Female option is not selected

  Scenario: Gender field displayed correctly
    Given I am on the "genderField" page
    Then gender field is displayed correctly
    And gender field label is displayed correctly
    And gender field supportive text is displayed correctly
    And gender field tooltip is displayed correctly

  Scenario: The gender field tooltip is displayed correctly
    Given I am on the "genderField" page
    Then The gender tooltip is displayed correctly
    And The gender tooltip is closed
    
  Scenario: The gender field tooltip expands with correct content
    Given I am on the "genderField" page
    When I expand the gender tooltip
    Then The gender tooltip is expanded
    And The expanded gender tooltip content is correct
