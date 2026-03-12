import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.apple.com/');
  await expect(page).toHaveTitle("Apple");
});
test('test2', async ({ page }) => {
  await page.goto('https://www.apple.com/');
  await page.getByRole('link', { name: 'Buy, iPhone 17e' }).click();
});


test('test3', async ({ page }) => {
  await page.goto('https://www.apple.com/');
  await page.getByLabel('iPad', { exact: true }).click();
});