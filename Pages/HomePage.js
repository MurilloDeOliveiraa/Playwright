//@ts-check
'use strict';

import { expect } from "@playwright/test";
const homePageUrl = 'https://www.saucedemo.com/inventory.html';

export class HomePage {
    constructor(page) {
        this.page = page;
    }

    async verifyIsOnHomePage() {
        await expect(this.page).toHaveURL(homePageUrl);
    }
}