@tooltipPage
Feature: Tooltip

  Scenario: Tooltip displayed correctly
    Given I am on the "tooltip" page
    Then tooltip is displayed correctly
    And tooltip text is correct
    And tooltip is closed

  Scenario: Can open tooltip
    Given I am on the "tooltip" page
    When I expand the tooltip
    Then tooltip is expanded
    And tooltip content is correct
    And tooltip title is correct

  Scenario: Can close tooltip
    Given I am on the "tooltip" page
    And I expand the tooltip
    And tooltip is expanded
    When I close the tooltip
    Then tooltip is closed
