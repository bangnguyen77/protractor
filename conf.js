exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['welcome.spec.js'],
  capabilities: {
    browserName: 'chrome'
  },
  onPrepare: function() {
    browser.driver.manage().window().setSize(1680, 1050);
  }
}
