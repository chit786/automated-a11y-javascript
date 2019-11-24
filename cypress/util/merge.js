const marge = require('mochawesome-report-generator');
const { merge } = require('mochawesome-merge');

// See Options below
const options = {
    reportDir: 'cypress/report',
    html: true,
    json: true
};

merge(options).then(report => marge.create(report, options));
