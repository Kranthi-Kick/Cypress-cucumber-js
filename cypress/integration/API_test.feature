Feature: API testing using Cypress


    Scenario: User performs GET api call and validate responses
    Given I make a get "employees" api call 
    Then the response status code should be 200
    And it should have response data of length 24

    Scenario: User performs POST api call and validate responses
    Given I make a post api call 
    Then the response status code should be 200 