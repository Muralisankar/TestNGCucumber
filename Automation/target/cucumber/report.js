$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("API.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: muralisankar.a@hungerrush.com"
    }
  ],
  "line": 4,
  "name": "API Automation",
  "description": "I want to use this template for my feature file",
  "id": "api-automation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Testing the APIs",
  "description": "",
  "id": "api-automation;testing-the-apis",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Testing API Sample1",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Testing API Sample2",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinition.testing_api_sample1()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.testing_api_sample2()"
});
formatter.result({
  "status": "skipped"
});
});