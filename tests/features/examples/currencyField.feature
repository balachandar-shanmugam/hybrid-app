@currencyFieldPage
Feature: Currency field

  Scenario: Currency field displayed correctly
    Given I am on the "currencyField" page
    Then currency field is displayed correctly
    And currency field tooltip is displayed correctly
    And currency field label is displayed correctly
    And currency field input is displayed correctly
    And currency field supportive text is displayed correctly

  Scenario: Insert value in currency field
    Given I am on the "currencyField" page
    And currency field input is enabled
    When I input an alphanumeric value to the currency field
    Then Only allowed characters are displayed in the currency field

  Scenario: Clear currency field
    Given I am on the "currencyField" page
    And currency field input is enabled
    When I input an alphanumeric value to the currency field
    And I clear the currency field
    Then currency field input is empty
