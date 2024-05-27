//const { test, expect } = require('@playwright/test')  //mesma coisa que o using no C#
import { test, expect } from '@playwright/test'

// o page é para poder usar os métodos, como se eu estivesse inicializando um objeto
test('My first Test', async ({ page }) => {
    let googleSearchBar = '#APjFqb';
    let text;
    let expectedTitle;

    await page.goto('https://google.com');
    await page.locator(googleSearchBar).click();
    await page.locator(googleSearchBar).fill('Globo');
    await page.keyboard.press('Enter');
    await page.pause();
    text = 'Globo - Pesquisa Google';

    if (text.includes('Globo - Pesquisa Google')) {
        expectedTitle = "Globo - Pesquisa Google";
    } else {
        expectedTitle = "Globo - Google Search"
    }
    await expect(page).toHaveTitle(expectedTitle);
});
