var WelcomePage = function() {
  this.appTitle = element.all(by.css(".app-log"));
};

describe('Moc Welcome Page', function() {
  var welcomePage = new WelcomePage();

  beforeEach(function() {
    browser.get('http://localhost:8100/#/auth/welcome');
  });
  it('should have a title', function() {
    expect(welcomePage.appTitle.getText()).toEqual("ByLocl Hillsboro");
  });
});
