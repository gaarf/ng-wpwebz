'use strict';


describe('redirects', function() {

  it('should show a 404 when navigating to /#/whatever', function() {
    browser.get('/#/whatever');

    expect(
      browser.getLocationAbsUrl()
    ).toMatch(/\/#\/whatever$/);

    expect(
      element(by.css('main .jumbotron')).getText()
    ).toMatch("Page not found");

  });

});

