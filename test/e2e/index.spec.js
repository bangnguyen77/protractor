var IndexPage = function() {
  this.blockButtons = element(by.css(".button.button-block"));

  this.loginFacebook = this.blockButtons.element(by.css(".facebook-sign-in"));
  this.login = this.blockButtons.element(by.css(".button.button-block")).get(1);
};

describe("http://moc-development-1.herokuapp.com/", function() {
  var IndexPage = new IndexPage();

  beforeEach(function() {
    browser.get('http://moc-development-1.herokuapp.com/');
  });
  it('should have two login buttons', function() {
    expect(indexPage.loginFacebook.isDisplayed()).toBe(true);
  })
})
