@mainPage @aboutPage
Feature: Interstellar SDK landing page - Accessibility

  Scenario Outline: Accessibility Testing for the Interstellar SDK Landing Page
    Given I am on the "main" page
    When I run accessibility on "main" page
    Then Accessibility report is generated
    And There are no more than "1" violations

  Scenario Outline: Accessibility Testing for the Interstellar SDK About Page
    Given I am on the "about" page
    When I run accessibility on "about" page
    Then Accessibility report is generated
    And There are no more than "1" violations
