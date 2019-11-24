## Javascript project setup for accessibility testing 

# Tools Used

- cypress: Automation tool
- cypress-axe : forked dependency from https://github.com/avanslaars/cypress-axe 
- axe-core
- mocha / mochawesome nodejs reporting to generate a fancy html reporting see `report/mochawesome.html` 

# prerequisites
- npm and node module needs to be installed

# Steps to Use

- clone this repository
- inside project's folder run command `npm install` to download and install the npm dependencies
- Execute `npm run cypress:run` command to run the cypress automated tests
- This will generate some console output on your terminal / command prompt window showing the a11y issues
- Execute `npm run cypress:report:merge` command to create a fancy html report (Before executing this command first have a glimpse of the report present in `cypress/report/mochawesome.html`)