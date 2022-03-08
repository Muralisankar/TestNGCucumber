$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("API.feature");
formatter.feature({
  "line": 3,
  "name": "API Automation",
  "description": "I want to use this template for my feature file",
  "id": "api-automation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Testing the APIs",
  "description": "",
  "id": "api-automation;testing-the-apis",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Testing API Sample1 \"Testing\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Testing API Sample2 \"Testing\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 21
    }
  ],
  "location": "stepDefinition.testing_api_sample1(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 21
    }
  ],
  "location": "stepDefinition.testing_api_sample2(String)"
});
formatter.result({
  "status": "skipped"
});
});