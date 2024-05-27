import { test, expect } from '@playwright/test'

test.describe.skip('Assertion Tests', () => {

    test.beforeAll(async () => {
        await page.goto('https://kitchen.applitools.com/');
        await page.pause();
    });

    test('Present or Not Present Assertion', async ({ page }) => {
        // Esse $ retorna True ou False, não podemos usar o getByRole numa condicional
        if (page.$('heading', { name: 'The Kitchen' })) {
            await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
        }
    });

    test('Visible or Not Visible Assertion', async ({ page }) => {
        await expect(page.locator('')).toBeVisible();
        await expect(page.locator('')).toBeHidden();
    });

    test('Enabled or Disabled Assertion', async ({ page }) => {
        await expect(page.locator('')).toBeEnabled();
        await expect(page.locator('')).toBeDisabled();
    });

    test('To have text or Not Assertion', async ({ page }) => {
        await expect(page.locator('')).toHaveText();
        await expect(page.locator('')).not.toHaveText();
    });

    test('To have attribute Assertion', async ({ page }) => {
        await expect(page.locator('')).toHaveClass();
        await expect(page.locator('')).toHaveAttribute('class', value);
    });
});