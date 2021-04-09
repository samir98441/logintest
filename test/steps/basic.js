const { browser } = require("selenium-webdriver")

module.exports = function given() {
    this.Given(/^I go to the (homepage|API)$/,
        function (page, done) {
            if (page === 'homepage')
                browser.url('./');
            else
                browser.url('/api.html');
        }
    );
}