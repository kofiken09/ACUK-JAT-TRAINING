$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 3,
  "name": "Google Search",
  "description": "As a web user\r\nI want to find information on google\r\nso that I get a better understanding of the topic",
  "id": "google-search",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Googlesearch"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "search result page contains search query",
  "description": "",
  "id": "google-search;search-result-page-contains-search-query",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I search for \"cucumber\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the page title should contain \"cucumber\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.i_am_on_google_search_page()"
});
formatter.result({
  "duration": 7796699500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber",
      "offset": 14
    }
  ],
  "location": "Loginsteps.i_search_for(String)"
});
formatter.result({
  "duration": 260383300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber",
      "offset": 31
    }
  ],
  "location": "Loginsteps.the_page_title_should_contain(String)"
});
formatter.result({
  "duration": 3837700,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefinition.Loginsteps.the_page_title_should_contain(Loginsteps.java:42)\r\n\tat ✽.Then the page title should contain \"cucumber\"(login.feature:11)\r\n",
  "status": "pending"
});
formatter.scenario({
  "line": 13,
  "name": "Google first result description contains searched query",
  "description": "",
  "id": "google-search;google-first-result-description-contains-searched-query",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on google search page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I search for \"Java\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "the first line on the result page should contain \"Java\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.i_am_on_google_search_page()"
});
formatter.result({
  "duration": 7700817700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 14
    }
  ],
  "location": "Loginsteps.i_search_for(String)"
});
formatter.result({
  "duration": 204869800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java",
      "offset": 50
    }
  ],
  "location": "Loginsteps.the_first_line_on_the_result_page_should_contain(String)"
});
formatter.result({
  "duration": 642000,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefinition.Loginsteps.the_first_line_on_the_result_page_should_contain(Loginsteps.java:48)\r\n\tat ✽.Then the first line on the result page should contain \"Java\"(login.feature:16)\r\n",
  "status": "pending"
});
});