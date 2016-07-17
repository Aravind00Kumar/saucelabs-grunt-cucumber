require('../support/waitReady.js');
var chai = require('chai'),
  expect = chai.expect,
  should = chai.should();
  var pages = require('../share/pages');

module.exports = function () {

  this.Given(/^What todo loaded$/, function (callback) {
    browser.get(browser.baseUrl)
      .then(function () {
        callback();
      })
      .catch(function (error) {
        callback(error);
      })
  });


  this.When(/^I navigate to "([^"]*)"$/, function (page, callback) {
    browser.get(browser.baseUrl + '/' +page)
      .then(function () {
        callback();
      })
      .catch(function (error) {
        callback(error);
      })
  });


  this.Then(/^I can see "([^"]*)" in "([^"]*)" page$/, function (title, page, callback) {
    pages[page].title.getText().then(function (value) {
      value.should.equal(title);
      callback();
    }).catch(function () {
      callback(null, 'pending');
    })

  });
}

