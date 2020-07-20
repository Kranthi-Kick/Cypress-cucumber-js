const cucumber = require("cypress-cucumber-preprocessor").default;

const BASE_URL = process.env.BASE_URL ? process.env.BASE_URL : "https://rahulshettyacademy.com/angularpractice";


module.exports = (on, config) => {
    on("file:preprocessor", cucumber());
    return Object.assign({}, config, {
        env: {
            "RETRIES": 1,
            URL: BASE_URL
        },
        baseUrl: BASE_URL,
        defaultCommandTimeout: 30000
    });
};
