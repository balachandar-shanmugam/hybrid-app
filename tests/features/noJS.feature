@mainPage
Feature: Interstellar SDK No JS page

  Scenario Outline: Validate the no JS page

    # Must disable JS before navigating to page
    Given JS is disabled
    When I am on the "main" page
    Then the no JS message is displayed
    And the chrome link is displayed
    And the edge link is displayed
    And the safari link is displayed
    And the firefox link is displayed
    And the opera link is displayed
    And the chrome link is reachable
    And the edge link is reachable
    And the safari link is reachable
    And the firefox link is reachable
    And the opera link is reachable
    