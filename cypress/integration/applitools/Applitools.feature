Feature: Applitools

  As a user, I can go to applitools.com.

  Scenario: User goes to applitools.com
    Given I go to "https://www.applitools.com/"
    Then I see title "Visually Perfect Applications with Automated Visual Testing - Applitools"
