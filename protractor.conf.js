exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://moc-development-1.herokuapp.com/',

  specs: [
    './e2e/**/*.spec.js'
  ],

  capabilities: {
    browserName: 'chrome'
  }
}
