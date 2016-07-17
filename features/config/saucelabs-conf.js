// conf.js
exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  specs: ['../gherkins/*.feature'],

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: ['../support/*.js', '../step_definitions/*_steps.js',],
    format: 'pretty'
  },
  // restartBrowserBetweenTests: true,

  onPrepare: function () {
    var caps = browser.getCapabilities()
  },

  capabilities: {
    'browserName': 'chrome',
    'version': '50',
    'platform': 'Windows 7',
    'tunnel-identifier': 'myTunnel',
    "build": "build-1234",
    'name': 'grunt-cucumber-chrome'
  },
  allScriptsTimeout: 20000,
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 100000,
    isVerbose: true
  },
  // multiCapabilities: [{
  //   browserName: 'chrome',
  //   version: '50',
  //   platform: 'Windows 7',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   maxInstances: 1
  // }],

  onComplete: function () {

    var printSessionId = function (jobName) {
      browser.getSession().then(function (session) {
        console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
      });
    }
    printSessionId("Insert Job Name Here");
  }
}
