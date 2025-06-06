@mainPage
Feature: Interstellar SDK landing page

  Scenario Outline: Validate the App is running

    Given I am on the "main" page
    Then SDK container is displayed
    And Constellation container is displayed
    And Footer container is displayed
