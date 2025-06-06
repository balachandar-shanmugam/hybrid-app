@textAreaPage
Feature: Text Area
 
  Scenario: Text Area displayed correctly
    Given I am on the "textArea" page
    And Text area is displayed correctly

  Scenario: Send text to text area
    Given I am on the "textArea" page
    And I send text to the text area
    Then text area contains the right text

  Scenario: Error not triggered
    Given I am on the "textArea" page
    Then Text Area Error is not triggered
