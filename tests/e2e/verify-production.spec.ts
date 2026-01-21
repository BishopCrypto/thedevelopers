import { test, expect } from '@playwright/test';

test('verify production deployment', async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.goto('https://thedevelopers-fxbr7zxwk-the-developers.vercel.app/');

  await expect(page.locator('h1')).toContainText('TheDevelopers');
  await expect(page.getByText('System Status:')).toBeVisible();
  await expect(page.getByText('INTERNAL')).toBeVisible();
  await expect(page.getByRole('link', { name: /Nomic Ventures/i })).toBeVisible();

  console.log('Console errors:', consoleErrors);
  expect(consoleErrors).toEqual([]);
});
