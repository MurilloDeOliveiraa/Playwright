//@ts-check
'use strict';

import { expect } from "@playwright/test";

export class CartPage {
    constructor(page) {
        this.page = page;

        this.pageUrl = 'https://www.saucedemo.com/inventory.html';
        this.addedItemName = page.locator('.inventory_item_name');
        this.addedItemQuantity = page.locator('.cart_quantity');
        this.testLocator = page.locator('');
    }

    async verifyCorrectItemQuantity(quantity) {
        await expect(this.addedItemQuantity).toContainText(`${quantity}`);
    }

    async verifyCorrectItemName() {
        await expect(this.addedItemName).toHaveText('Sauce Labs Backpack');
    }
}