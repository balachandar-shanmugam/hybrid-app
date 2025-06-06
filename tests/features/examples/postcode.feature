@postcodePage
Feature: Postcode

  Scenario: Can send data to postcode box
    Given I am on the 'postcode' page
    And postcode box is enabled
    When I input a string to the postcode box
    Then The string is in the postcode box
    
  Scenario: Can clear postcode box
    Given I am on the 'postcode' page
    And postcode box is enabled
    When I input a string to the postcode box
    And The string is in the postcode box
    And I clear the postcode box
    Then postcode box is empty
  
  Scenario: Can click postcode button
    Given I am on the 'postcode' page
    And postcode box is enabled
    Then I can click on postcode button
    # no assertion here, there is no real postcode lookup
