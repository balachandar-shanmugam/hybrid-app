@tabsPage
Feature: Tabs
 
  Scenario: Tabs displayed correctly
    Given I am on the "tabs" page
    And Tabs are displayed correctly
  
  Scenario: Selecting tabs
    Given I am on the "tabs" page
    When I select the second tab
    Then Second tab is selected
    And First tab is not selected
