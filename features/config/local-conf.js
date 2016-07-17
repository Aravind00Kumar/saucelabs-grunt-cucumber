// conf.js
var path = require('path');

exports.config = {

  seleniumServerJar: path.join(__dirname, "../../bin/selenium-server-standalone-2.53.0.jar"),
  chromeDriver: path.join(__dirname, "../../bin/chromedriver.exe"),
  seleniumPort: 4444,

  specs: ['../gherkins/*.feature'],

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: ['../support/*.js', '../step_definitions/*_steps.js',],
    format: 'pretty'
  },
  onPrepare: function () {
    var caps = browser.getCapabilities()
  },

  capabilities: {
    'browserName': 'chrome',
    'version': '50',
    'name': 'Chrome-Tests'
  },
  allScriptsTimeout: 20000,
}
