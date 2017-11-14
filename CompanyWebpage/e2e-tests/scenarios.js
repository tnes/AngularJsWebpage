'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /homePage when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/homePage");
  });


  describe('homePage', function() {

    beforeEach(function() {
      browser.get('index.html#!/homePage');
    });


    it('should render homePage when user navigates to /homePage', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('projectPage', function() {

    beforeEach(function() {
      browser.get('index.html#!/projectPage');
    });


    it('should render projectPage when user navigates to /projectPage', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
