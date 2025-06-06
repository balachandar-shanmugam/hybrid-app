@accordionPage
Feature: Accordion

  Scenario: Accordion displayed correctly
      Given I am on the "accordion" page
      Then First expandable text is correct
      And Second expandable text is correct

  Scenario: Accordion can expand
      Given I am on the "accordion" page
      When I expand the first component of the accordion
      Then First component of the accordion is expanded
      And Second component of the accordion is collapsed

  Scenario: Accordion can collapse
      Given I am on the "accordion" page
      When I expand the first component of the accordion
      And I collapse the first component of the accordion
      Then First component of the accordion is collapsed
