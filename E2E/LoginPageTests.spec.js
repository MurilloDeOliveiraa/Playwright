//@ts-check
'use strict';

import { test, chromium } from '@playwright/test';
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";

test.describe('Login Tests', () => {
    let browser;
    let context;
    let page;
    let loginPage;
    let homePage;
    const url = 'https://www.saucedemo.com/';

    test.beforeEach(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto(url);
        await page.pause();
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
    });

    test.afterAll(async () => {
        await page.close();
        await context.close();
        await browser.close();
    });

    test('@Smoke - Should successfully Login', async () => {
        await loginPage.fillLoginFields('standard_user', 'secret_sauce');
        await homePage.verifyIsOnHomePage();
    });
});

