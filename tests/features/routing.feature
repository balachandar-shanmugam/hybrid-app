@mainPage @aboutPage @nonExistingDomainPage @nonExistingPage @nonExistingSubpathPage @problemPage
Feature: Interstellar SDK routing

  Scenario Outline: Direct Navigation - About Us
    Given I am on the "main" page
    When I navigate directly to the About Us page
    Then About Us page should be displayed

  Scenario Outline: Direct Navigation - Home
    Given I am on the "main" page
    And I navigate directly to the About Us page
    When I navigate directly to the Home page
    Then SDK container is displayed

  Scenario Outline: Non existing route
    Given I am on the "main" page
    When I navigate to a non existing page
    Then Problem page should be displayed

  Scenario Outline: Non existing subroute
    Given I am on the "main" page
    When I navigate to a non existing page with subpath
    Then Problem page should be displayed

  Scenario Outline: Non existing domain
    Given I am on the "main" page
    When I navigate to a non existing domain
    Then Problem page should be displayed
