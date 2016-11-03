var IndexPage = function() {
  this.blockButtons = element(by.css(".button.button-block"));

  this.loginFacebook = this.blockButtons.element(by.css(".facebook-sign-in"));
  this.login = this.blockButtons.element(by.css(".button.button-block")).get(1);
};

describe("http://localhost:8100/#/auth/welcome", function() {
  var IndexPage = new IndexPage();

  beforeEach(function() {
    browser.get('http://localhost:8100/#/auth/welcome');
  });
  it('should have two login buttons', function() {
    expect(indexPage.loginFacebook.isDisplayed()).toBe(true);
  })
})
