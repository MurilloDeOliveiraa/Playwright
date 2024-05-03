//const { test, expect } = require('@playwright/test')  //mesma coisa que o using no C#
import { test, expect } from '@playwright/test'


test('My first Test', async ({ page }) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle("Google")
});