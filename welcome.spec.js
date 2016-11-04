var WelcomePage = function() {
  this.appLogo = element(by.css("h1.app-log"));
};

describe('localhost:8100/#/auth/welcome', function() {
  var welcomePage = new WelcomePage();

  beforeEach(function() {
    browser.get('http://localhost:8100/#/auth/welcome');
  });
  it('should have a title', function() {
    var ptor = protractor.getInstance();
    ptor.waitForAngular();
    expect(welcomePage.appLogo.getText()).toEqual("ByLocl Hillsboro");
  });
});

// var DownloadModal = function() {
//   this.downloadModal = element(by.css(".download-modal"));
// }

// describe('Download button', function() {
//   var homePage = new HomePage();
//   var downloadModal = new DownloadModal();
//
//   beforeEach(function() {
//     browser.get('http://localhost:8100/#/auth/welcome');
//   });
//   it('should open up a download modal', function() {
//     expect(downloadModal.downloadModal.isPresent()).toBe(false);
//     homePage.downloadButton.click();
//     browser.waitForAngular();
//     expect(downloadModal.downloadModal.isDisplayed()).toBe(true);
//   });
// });
