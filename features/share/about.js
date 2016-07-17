var HomePage = function () {
    this.url = browser.baseUrl + '/about';
    var ctrl = 'aboutCtrl';

    // Page Object
    this.title = element(by.binding( ctrl + '.title'))
};

module.exports = new HomePage();
