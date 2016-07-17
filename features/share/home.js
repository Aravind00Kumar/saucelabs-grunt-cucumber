var HomePage = function () {
    this.url = browser.baseUrl + '/home';
    var ctrl = 'homeCtrl';

    // Page Object
    this.title = element(by.binding( ctrl + '.title'))
};

module.exports = new HomePage();
