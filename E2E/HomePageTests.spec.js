import { test, expect } from '@playwright/test'

test('Google Test', async ({ page }) => {
    let googleSearchBar = '#APjFqb';
    let localRun = false;

    await page.goto('https://google.com');
    await page.locator(googleSearchBar).click();
    await page.locator(googleSearchBar).fill('Globo');
    await page.keyboard.press('Enter');
    await page.pause();

    if (localRun) {
        await expect(page).toHaveTitle('Globo - Pesquisa Google');
    } else {
        await expect(page).toHaveTitle('Globo - Google Search');
    }
});
