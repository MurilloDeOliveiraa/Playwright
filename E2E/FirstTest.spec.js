//const { test, expect } = require('@playwright/test')  //mesma coisa que o using no C#
import { test, expect } from '@playwright/test'

// o page é para poder usar os métodos, como se eu estivesse inicializando um objeto
test('My first Test', async ({ page }) => {
    await page.goto('https://google.com');
    await page.locator('#APjFqb').click();
    await page.locator('#APjFqb').fill('Globo');
    await page.keyboard.press('Enter');
    await expect(page).toHaveTitle("Globo - Google Search");
    // Test 2
});
