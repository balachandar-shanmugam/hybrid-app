@notificationPage
Feature: Notification

   Scenario: Notification displayed correctly
      Given I am on the "notification" page
      Then Information notification is displayed
      And Warning notification is displayed
      And Critical notification is displayed
      And Success notification is displayed
      And Information notification content is correct
