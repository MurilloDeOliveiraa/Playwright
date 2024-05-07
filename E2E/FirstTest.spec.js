//const { test, expect } = require('@playwright/test')  //mesma coisa que o using no C#
import { test, expect } from '@playwright/test'

// o page é para poder usar os métodos, como se eu estivesse inicializando um objeto
test('My first Test', async ({ page }) => {
    await page.goto('https://google.com')
    await expect(page).toHaveTitle("Google")
});

test('Second Test', async ({ page }) => {
    await page.goto('https://globoesporte.globo.com/')
    await expect(page).toHaveTitle("ge.globo - É esporte sempre")
});