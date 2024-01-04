import { test, expect } from '@playwright/test';
import { allure } from "allure-playwright";
test.describe('Routing', () => {


test('has title', async ({ page }) => {


allure.epic("Epic 1.1 Info");
allure.feature("Feature 1.1 Info");
allure.label('severity', 'high!!!');
allure.label('epic', 'Epic 1.1 Info'); // Specify your feature here
allure.label('feature', 'Feature 1.1 Info'); // Specify your feature here
allure.description("description");
allure.id("id");
  await page.goto('https://playwright.dev/');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
});
