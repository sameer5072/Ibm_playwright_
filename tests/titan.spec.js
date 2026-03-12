// @ts-check
import { test, expect } from '@playwright/test';

test('Titan', async ({page}) => {
  await page.goto('https://www.titan.com/');
  await expect(page).toHaveTitle('Titan | A Dedicated Financial Advisor for Your Wealth');
});

test('test', async ({ page }) => {
  await page.goto('https://www.titan.com/');
  await page.getByRole('link', { name: 'Offerings' }).click();
});

test('test1', async ({ page }) => {
  await page.goto('https://www.titan.com/');
  await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
});

test('test2', async ({ page }) => {
  await page.goto('https://www.titan.com/');
  await page.getByRole('navigation').getByRole('link', { name: 'Blog' }).click();
});

test('test3', async ({ page }) => {
  await page.goto('https://www.titan.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Log In' }).click();
  const page1 = await page1Promise;
});

test('test4', async ({ page }) => {
  await page.goto('https://www.titan.com/');
  await page.getByRole('link', { name: 'Get Started' }).click();
});



