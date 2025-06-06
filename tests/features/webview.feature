@webviewPage
Feature: Webview

  Scenario Outline: JSBridge initiated when not in webview

    Given I am on the "webview" page
    And Webview header is displayed
    And Webview footer is displayed
    And Webview heading is displayed
    When I click on the ios button
    Then nga bridge is initiated
    And webview callback is triggered

  Scenario Outline: Page in webview mode via query param

    Given I am on the webview page in webview mode
    And Webview heading is displayed
    Then Webview header is not displayed
    Then Webview footer is not displayed

  Scenario Outline: Page not in webview mode via query param

    Given I am on the webview page not in webview mode
    And Webview heading is displayed
    Then Webview header is displayed
    Then Webview footer is displayed

  #TODO: this scenario can't be automated quickly
  # adding it to the manual coverage, we'll pick it up later
  # Scenario Outline: Overridden callback
  #   Given I am on the "webview" page
  #   When I override the android button callback
  #   And I click on the android button
  #   Then overridden Callback is triggered
