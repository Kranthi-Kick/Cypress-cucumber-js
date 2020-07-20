/* eslint-disable import/no-dynamic-require */
const fs = require("fs");
const path = require("path");
const reporstFolder = path.join(__dirname, "cypress-reports");
const filterCucumberReports = (file) => file.endsWith("-cucumber.json");
const fileList = (folder)=> {
    return fs.readdirSync(folder)
        .filter(filterCucumberReports)
        .map(file => require(path.join(folder, file)));
}
const main = () => {
    const arrays = fileList(reporstFolder)
    var merged = [].concat.apply([], arrays);
    fs.writeFileSync(path.join(reporstFolder,`cypress-report.json` ),JSON.stringify(merged, null, 4));
}

main();