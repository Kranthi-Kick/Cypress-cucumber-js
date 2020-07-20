import { Given, Then, And } from "cypress-cucumber-preprocessor/steps";

const baseAPI = "http://dummy.restapiexample.com/api/v1";
let apiResponse;
let fixtureData;
before(() => {
    cy.fixture('api.json').then((data)=>{
        fixtureData = data;
    })
  })

function getAPI (callOF){
    cy.request(`${baseAPI}/${callOF}`).then((response) => {
        apiResponse = response ;
    })
}
function statuscode (value){
    expect(apiResponse).to.have.property('status', value)
}
function responseLength (length){
    expect(apiResponse.body.data).to.have.length(length)
    cy.log(apiResponse.body.data)
    console.log(apiResponse.body.data)
}
function postAPI (){ 
    cy.request('POST', `${baseAPI}/create`, fixtureData)
    .then((res)=>{
        apiResponse = res ;
    })
}
Given ("I make a get {string} api call", (callOF) => getAPI(callOF));
Then ("the response status code should be {int}", (value) => statuscode (value));
And ("it should have response data of length {int}", (length) => responseLength (length));
Given ("I make a post api call",()=> postAPI())