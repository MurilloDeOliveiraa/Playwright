//@ts-check
'use strict';

import { test, chromium } from '@playwright/test';
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";

test.describe('@Smoke - Smoke Tests', () => {
    let browser;
    let context;
    let page;
    let loginPage;
    let homePage;
    const url = process.env.URL;

    test.beforeEach(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
    });

    test.afterEach(async () => {
        await browser.close();
    });

    test('Successfully Login', async () => {
        await loginPage.goToLoginPage(url);
        await loginPage.fillLoginFields(process.env.VALID_USERNAMEE, process.env.VALID_PASSWORD);
        await homePage.verifyIsOnHomePage();
    });

    test('Login with invalid credentials', async () => {
        await loginPage.goToLoginPage(url);
        await loginPage.fillLoginFields(process.env.INVALID_USERNAME, process.env.INVALID_PASSWORD);
        await loginPage.verifyErrorMessageIsVisible();
    })

    test('Login with blank fields', async () => {
        await loginPage.goToLoginPage(url);
        await loginPage.fillLoginFields('', '');
        await loginPage.verifyErrorMessageIsVisible();
    })
});

