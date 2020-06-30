/// <reference types="cypress" />
const cucumber = require("cypress-cucumber-preprocessor").default;

const BASE_URL = process.env.BASE_URL ? process.env.BASE_URL : "";


module.exports = (on, config) => {
    on("file:preprocessor", cucumber());
    return Object.assign({}, config, {
        env: {
            "RETRIES": 1,
            URL: BASE_URL
        },
        baseUrl: BASE_URL,
        fixturesFolder: false,
        defaultCommandTimeout: 30000
    });
};
