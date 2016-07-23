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

  // capabilities: {
  //   'browserName': 'chrome',
  //   'version': '50',
  //   'platform': 'Windows 7',
  //   'tunnel-identifier': 'CucumberTunnel',
  //   "build": "build-1234",
  //   'name': 'grunt-cucumber-chrome'
  // },

  // capabilities: {
  //     'tunnel-identifier': 'CucumberTunnel',
  //     'browserName': 'safari',
  //     'platform': 'OS X 10.11',
  //     'version': '9.0',
  //     'name': 'grunt-cucumber-safari'
  // },

  // allScriptsTimeout: 20000,
  // getPageTimeout: 20000,
  // // Options to be passed to Jasmine-node.
  // jasmineNodeOpts: {
  //   showColors: true,
  //   defaultTimeoutInterval: 20000,
  //   isVerbose: true
  // },
  multiCapabilities: [
    {
      'tunnel-identifier': 'CucumberTunnel',
      'browserName': 'chrome',
      'platform': 'Windows 7',
      'version': '50',
      'name': 'grunt-cucumber-chrome',
      'recordVideo':false,
      'recordScreenshots': false
    }
    ,
    {
      'tunnel-identifier': 'CucumberTunnel',
      'browserName': 'firefox',
      'platform': 'Linux',
      'version': '45.0',
      'name': 'grunt-cucumber-firefox',
      'recordVideo':false,
      'recordScreenshots': false
    }
    ,
    {
      'tunnel-identifier': 'CucumberTunnel',
      'browserName': 'safari',
      'platform': 'OS X 10.11',
      'version': '9.0',
      'name': 'grunt-cucumber-safari',
      'recordVideo':false,
      'recordScreenshots': false
    }
  ],
  onComplete: function () {

    var printSessionId = function (jobName) {
      browser.getSession().then(function (session) {
        console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
      });
    }
    printSessionId("Insert Job Name Here");
  }
}
