# Nodejs
NodeJs Test Automation Framework


External Dependencies

1. csvtojson  - Parse text file with delimited values and convert to Json object
2. Mocha  - BDD type scenario
3. Debugging REPL  - For debug
4. babel-register - Helps to have different configuration to Run, debug, inspect with break point
5. istanbul - Coverage report

Folder Structure
BusinessRulesValidation  - Functions to pass the control to validation method based on Json Key.
test - contains test file which is driven through Mocha
TestData - Holds various test data to test Textparser functions
Utility - Textparser function to convert lines in text file to Json object

Please use npm test after installing necessary dependencies
