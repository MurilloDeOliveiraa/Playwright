//@ts-check
'use strict';

export class LoginPage {

    constructor(page) {
        this.page = page;

        this.userNameField = page.locator('#user-name')
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async fillLoginFields(username, password) {
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}
