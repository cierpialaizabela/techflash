import {browser, by, element} from 'protractor';
import {PageObject} from '../pageobject/pageobject.po';

let pageObject = new PageObject();

describe('open browser', function() {
    it('should open page', function() {
        browser.get('http://automationpractice.com/index.php');
        pageObject.getLoginButton().click();
        pageObject.getEmailField().sendKeys('techflash@www.pl');
        pageObject.getSubmitButton().click();
        browser.sleep(5000);
        expect('');
    });
});
