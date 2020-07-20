const fs = require("fs");
const reporter = require('cucumber-html-reporter');

const rootDir = `./cypress-reports`;
const outputDir = `${rootDir}/html`
const BROWSER = process.env.BROWSER ? process.env.BROWSER : "chrome";

const filterCucumberReports = (file) => file.endsWith("-report.json");
const fileToOptions = (file) => {
    return {
            theme: 'bootstrap',
            jsonFile: `${rootDir}/${file}`,
            output: `${outputDir}/${file.replace("-report.json", "-cucumber-report.html")}`,
            reportSuiteAsScenarios: true,
            launchReport: false,
            metadata: {
                Browser: file.split("-")[0],
                BuildTag: process.env.BUILDTAG
            }
    }
};
const generateReport = (options) => reporter.generate(options);

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

fs.readdirSync("cypress-reports")
    .filter(filterCucumberReports)
    .map(fileToOptions)
    .forEach(generateReport);
