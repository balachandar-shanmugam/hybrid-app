@mainPage
Feature: Interstellar SDK landing page Performance

  Scenario Outline: Main page performance
    Given I want to record performance
    And I am on the "main" page
    When I want to collect perf metrics
    And I want to collect perf index
    Then I can log performance metrics
    And I can log performance score
    And Performance score is above "90"
