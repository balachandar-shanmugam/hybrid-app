@numberFieldPage
Feature: Number Field

  Scenario: Number field displayed correctly
    Given I am on the "numberField" page
    Then number field is displayed correctly
    And number field label is correct
    And number field supportive text is correct

  Scenario: Number field value increased
    Given I am on the "numberField" page
    And number field value is "0"
    When I increase the amount
    Then number field value is "1"

  Scenario: Number field value decreased
    Given I am on the "numberField" page
    When I increase the amount
    And number field value is "1"
    And I decrease the amount
    Then number field value is "0"

  Scenario: Can insert value directly
    Given I am on the "numberField" page
    When I insert the value directly in the number field
    Then number field value is "10"
