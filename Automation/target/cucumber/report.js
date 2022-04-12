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
      "name": "@APITest1"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "TC0001 Validate a gamecard",
  "description": "",
  "id": "api-automation;tc0001-validate-a-gamecard",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@TC0001"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Create a new gamecard",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Verify the balance of the gamecard",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Add amount to the gamecard",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify the updated balance of the gamecard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.create_a_new_gamecard()"
});
formatter.result({
  "duration": 5582654100,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.verify_the_balance_of_the_gamecard()"
});
formatter.result({
  "duration": 1674233800,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.add_amount_to_the_gamecard()"
});
formatter.result({
  "duration": 1523491600,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.verify_the_updated_balance_of_the_gamecard()"
});
formatter.result({
  "duration": 1531909500,
  "status": "passed"
});
});