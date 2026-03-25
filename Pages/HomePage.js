//@ts-check
'use strict';

import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {
    constructor(page) {
        super(page);  //calling BasePage's constructor
        this.page = page;

        this.pageUrl = 'https://www.saucedemo.com/inventory.html';
        this.backPackItem = page.locator(`button[id*='backpack']`);
        this.cartButton = page.locator('.shopping_cart_link');
    }

    async verifyIsOnHomePage() {
        await expect(this.page).toHaveURL(this.pageUrl);
    }

    async addOneBackpackToCart() {
        await this.backPackItem.click();
    }

    async clickToViewCart() {
        await this.cartButton.click();
    }
}