import {browser, by, element} from 'protractor';

export class PageObject {

    getLoginButton() {
        return element(by.className('login'));
    }

    getEmailField() {
        return element(by.id('email_create'));
    }

    getSubmitButton() {
        return element(by.id('SubmitCreate'));
    }
}
