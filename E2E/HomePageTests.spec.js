//@ts-check
'use strict';

import { test, chromium } from '@playwright/test'
import { LoginPage } from "../Pages/LoginPage";
import { HomePage } from "../Pages/HomePage";
import { CartPage } from "../Pages/CartPage";

test.describe('@Smoke - Smoke Tests', () => {
    let browser;
    let context;
    let page;
    let loginPage, homePage, cartPage;
    const url = process.env.URL;

    test.beforeEach(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        cartPage = new CartPage(page);
    });

    test.afterAll(async () => {
        await browser.close();
    });

    test('Add one prodcut to cart', async () => {
        await loginPage.goToLoginPage(url);
        await loginPage.fillLoginFields(process.env.VALID_USERNAME, process.env.VALID_PASSWORD);
        await homePage.verifyIsOnHomePage();
        await homePage.addOneBackpackToCart();
        await homePage.clickToViewCart();
        await cartPage.verifyCorrectItemQuantity(1);
        await cartPage.verifyCorrectItemName();
    });
});
