var HomePage = function () {
    this.url = browser.baseUrl + '/help';
    var ctrl = 'helpCtrl';

    // Page Object
    this.title = element(by.binding( ctrl + '.title'))
};

module.exports = new HomePage();
