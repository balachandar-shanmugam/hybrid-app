@dialogPage
Feature: Dialog

  Scenario: Dialog displayed correctly
    Given I am on the "dialog" page
    Then dialog is displayed correctly
    And dialog title is displayed correctly
    And dialog paragraph is displayed correctly

  Scenario: Dialog Primary button
    Given I am on the "dialog" page
    Then I can click on primary button
    And Primary button text is correct

  Scenario: Dialog Secondary button
    Given I am on the "dialog" page
    Then I can click on secondary button
    And Secondary button text is correct    
