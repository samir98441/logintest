Feature: basic website
    testing using wdio

    Scenario: homepage
        Given I go to the API
        When I look at the top
        Then The header should be visible