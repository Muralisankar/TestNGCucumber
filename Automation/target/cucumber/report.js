$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("API.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author : Muralisankar"
    }
  ],
  "line": 3,
  "name": "API Automation",
  "description": "",
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
  "line": 6,
  "name": "Testing the APIs",
  "description": "",
  "id": "api-automation;testing-the-apis",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Testing API Sample1 \"Testing\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
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
  "duration": 488397200,
  "status": "passed"
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
  "duration": 144400,
  "status": "passed"
});
});