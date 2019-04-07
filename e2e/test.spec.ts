import {browser, by, element} from 'protractor';

fdescribe('open browser', function() {
    it('should open page', function() {
        browser.get('http://automationpractice.com/index.php');
        expect('');
    });
});

