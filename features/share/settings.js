var HomePage = function () {
    this.url = browser.baseUrl + '/settings';
    var ctrl = 'settingsCtrl';

    // Page Object
    this.title = element(by.binding(ctrl + '.title'))
};

module.exports = new HomePage();
