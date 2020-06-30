import { When, Given, Then, And } from "cypress-cucumber-preprocessor/steps";
import { AllElements } from "../AllElements";


function navigateTo (pageName){
    cy.visit(AllElements.get(pageName));
}

function clickElement (element){
    cy.selector(element).click();
}
function fillFields(field,text){
    cy.selector(field).type(text);
}
function readElement(field,text){
    cy.selector(field).contains(text)
}
function selectValues(field,text){
    cy.selector(field).select(text);
}
Given("I navigate to {string} page", (pageName) => navigateTo(pageName));
When("I click the {string}", (element) => clickElement(element));
And("I fill {string} as {string}", (field,text) => fillFields(field,text));
Then("I should read {string} as {string}", (field,text) => readElement(field,text));
And("I select {string} as {string}", (field,text) => selectValues(field,text));