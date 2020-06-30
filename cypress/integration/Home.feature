
Feature: Accessing Home page fileds


  Scenario: User submits after filling the form and should the success message
    Given I navigate to "home" page
    When I fill "name" as "demo"
    And I fill "email" as "qwerty@abc.xyz"
    And I fill "password" as "cannotbeshared"
    And I select "gender" as "Male"
    And I fill "DOB" as "2020-06-30"
    Then I click the "submit"
    And I should read "alert" as "Success! The Form has been submitted successfully!."