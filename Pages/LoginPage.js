//@ts-check
'use strict';

import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {
        this.page = page;

        this.userNameField = page.locator('#user-name')
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessageContainer = page.locator('.error-message-container');
        this.errorMessageContainer2 = page.locator('.error-message-container');
        this.errorMessageContainer3 = page.locator('.error-message-container');
    }

    async goToLoginPage(url) {
        await this.page.goto(url);
    }

    async fillLoginFields(username, password) {
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async verifyErrorMessageIsVisible() {
        await expect(this.errorMessageContainer).toBeVisible();
    }
}
