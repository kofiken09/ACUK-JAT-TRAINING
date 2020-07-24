@Googlesearch @test

  Feature: Google Search
    As a web user
    I want to find information on google
    so that I get a better understanding of the topic

  Scenario: search result page contains search query
   Given I am on google search page
   When I search for "cucumber"
   Then the page title should contain "cucumber"

  Scenario: Google first result description contains searched query
    Given I am on google search page
    When I search for "Java"
    Then the first line on the result page should contain "Java"




