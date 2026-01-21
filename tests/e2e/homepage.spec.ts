import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should render with no console errors', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('pageerror', error => {
      consoleErrors.push(error.message);
    });

    await page.goto('/');

    // Check main heading
    await expect(page.locator('h1')).toContainText('TheDevelopers');
    await expect(page.locator('h1 span')).toContainText('.dev');

    // Check system status text
    await expect(page.getByText('System Status:')).toBeVisible();
    await expect(page.getByText('INTERNAL')).toBeVisible();

    // Check narrative section
    await expect(page.getByText('We are no longer accepting general development inquiries.')).toBeVisible();
    await expect(page.getByText('Rapid Engineering & Venture Production')).toBeVisible();

    // Check navigation links
    await expect(page.getByRole('link', { name: /Nomic Ventures/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Strategic Consulting/i })).toBeVisible();

    // Check footer
    await expect(page.getByText('ID: 600M_EXIT_NODE //')).toBeVisible();

    // Verify no console errors
    expect(consoleErrors).toEqual([]);
  });

  test('should have correct link destinations', async ({ page }) => {
    await page.goto('/');

    const nomicLink = page.getByRole('link', { name: /Nomic Ventures/i });
    await expect(nomicLink).toHaveAttribute('href', 'https://nomic.ventures');

    const consultLink = page.getByRole('link', { name: /Strategic Consulting/i });
    await expect(consultLink).toHaveAttribute('href', 'https://nomic.ventures/consult');
  });

  test('should have correct page title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('The Developers | Nomic Ventures Production');
  });
});
