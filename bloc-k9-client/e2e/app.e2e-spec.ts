import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for bloc-k9', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be bloc-k9', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('bloc-k9');
    })
  });

  it('navbar-brand should be bloc-k9@0.0.1',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('bloc-k9@0.0.1');
  });

  
    it('MicroChip component should be loadable',() => {
      page.navigateTo('/MicroChip');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('MicroChip');
    });

    it('MicroChip table should have 2 columns',() => {
      page.navigateTo('/MicroChip');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(2); // Addition of 1 for 'Action' column
      });
    });

  
    it('Animal component should be loadable',() => {
      page.navigateTo('/Animal');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Animal');
    });

    it('Animal table should have 5 columns',() => {
      page.navigateTo('/Animal');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });

  

});
