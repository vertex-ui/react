import { test, expect } from '@playwright/test';

/**
 * Visual Regression Tests for VTX UI Components
 *
 * These tests capture screenshots of components and compare them against baseline images.
 * Run `npm run test:playwright:update` to update baseline screenshots when making intentional changes.
 */

test.describe('VTX UI Component Visual Regression Tests', () => {

  // Run before each test to ensure consistent starting state
  test.beforeEach(async ({ page }) => {
    // Navigate to Storybook or a test page with your components
    // For this example, we'll use Storybook's iframe to isolate components
    await page.goto('/');

    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
  });

  test.describe('Button Component', () => {
    test('should match baseline screenshot - primary variant', async ({ page }) => {
      // Navigate to the Button story in Storybook
      await page.goto('/iframe.html?id=components-button--primary&viewMode=story');

      // Wait for component to render
      await page.waitForSelector('button', { state: 'visible' });

      // Optional: Wait for any fonts or styles to load
      await page.waitForTimeout(500);

      // Locate the specific component
      const button = page.locator('button').first();

      // Take screenshot and compare with baseline
      // Baseline will be saved in tests/playwright/__screenshots__/[browser]/button-primary.png
      await expect(button).toHaveScreenshot('button-primary.png', {
        // Override global settings if needed
        maxDiffPixelRatio: 0.1,
      });
    });

    test('should match baseline screenshot - secondary variant', async ({ page }) => {
      await page.goto('/iframe.html?id=components-button--secondary&viewMode=story');
      await page.waitForSelector('button', { state: 'visible' });
      await page.waitForTimeout(500);

      const button = page.locator('button').first();
      await expect(button).toHaveScreenshot('button-secondary.png');
    });

    test('should match baseline screenshot - hover state', async ({ page }) => {
      await page.goto('/iframe.html?id=components-button--primary&viewMode=story');
      await page.waitForSelector('button', { state: 'visible' });
      await page.waitForTimeout(500);

      const button = page.locator('button').first();

      // Hover over the button to capture hover state
      await button.hover();

      // Wait a moment for hover styles to apply
      await page.waitForTimeout(200);

      await expect(button).toHaveScreenshot('button-primary-hover.png');
    });

    test('should match baseline screenshot - disabled state', async ({ page }) => {
      await page.goto('/iframe.html?id=components-button--disabled&viewMode=story');
      await page.waitForSelector('button', { state: 'visible' });
      await page.waitForTimeout(500);

      const button = page.locator('button').first();
      await expect(button).toHaveScreenshot('button-disabled.png');
    });
  });

  test.describe('Input Component', () => {
    test('should match baseline screenshot - default state', async ({ page }) => {
      await page.goto('/iframe.html?id=components-input--default&viewMode=story');
      await page.waitForSelector('input', { state: 'visible' });
      await page.waitForTimeout(500);

      const input = page.locator('input').first();
      await expect(input).toHaveScreenshot('input-default.png');
    });

    test('should match baseline screenshot - filled state', async ({ page }) => {
      await page.goto('/iframe.html?id=components-input--default&viewMode=story');
      await page.waitForSelector('input', { state: 'visible' });
      await page.waitForTimeout(500);

      const input = page.locator('input').first();

      // Fill the input with sample text
      await input.fill('Sample input text');

      // Blur to remove focus styling
      await input.blur();
      await page.waitForTimeout(200);

      await expect(input).toHaveScreenshot('input-filled.png');
    });

    test('should match baseline screenshot - error state', async ({ page }) => {
      await page.goto('/iframe.html?id=components-input--error&viewMode=story');
      await page.waitForSelector('input', { state: 'visible' });
      await page.waitForTimeout(500);

      // Capture the entire form control container (input + error message)
      const formControl = page.locator('[class*="form"]').first();
      await expect(formControl).toHaveScreenshot('input-error.png');
    });
  });

  test.describe('Modal Component', () => {
    test('should match baseline screenshot - open state', async ({ page }) => {
      await page.goto('/iframe.html?id=components-modal--default&viewMode=story');

      // Wait for and click the trigger button to open modal
      const openButton = page.locator('button', { hasText: /open|show/i }).first();
      await openButton.waitFor({ state: 'visible' });
      await openButton.click();

      // Wait for modal to be visible
      await page.waitForSelector('[role="dialog"]', { state: 'visible' });
      await page.waitForTimeout(500); // Wait for animation

      // Capture the entire modal including backdrop
      const modal = page.locator('[role="dialog"]').first();
      await expect(modal).toHaveScreenshot('modal-open.png');
    });

    test('should match baseline screenshot - full page with modal overlay', async ({ page }) => {
      await page.goto('/iframe.html?id=components-modal--default&viewMode=story');

      const openButton = page.locator('button', { hasText: /open|show/i }).first();
      await openButton.waitFor({ state: 'visible' });
      await openButton.click();

      await page.waitForSelector('[role="dialog"]', { state: 'visible' });
      await page.waitForTimeout(500);

      // Take full page screenshot to capture backdrop effect
      await expect(page).toHaveScreenshot('modal-overlay-full.png', {
        fullPage: true,
      });
    });
  });

  test.describe('Card Component', () => {
    test('should match baseline screenshot - default card', async ({ page }) => {
      await page.goto('/iframe.html?id=components-card--default&viewMode=story');
      await page.waitForSelector('[class*="card"]', { state: 'visible' });
      await page.waitForTimeout(500);

      const card = page.locator('[class*="card"]').first();
      await expect(card).toHaveScreenshot('card-default.png');
    });

    test('should match baseline screenshot - card with hover effect', async ({ page }) => {
      await page.goto('/iframe.html?id=components-card--interactive&viewMode=story');
      await page.waitForSelector('[class*="card"]', { state: 'visible' });
      await page.waitForTimeout(500);

      const card = page.locator('[class*="card"]').first();
      await card.hover();
      await page.waitForTimeout(200);

      await expect(card).toHaveScreenshot('card-hover.png');
    });
  });

  test.describe('ProductCard Widget', () => {
    test('should match baseline screenshot - product card', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-productcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);

      // Wait for images to load if any
      await page.waitForFunction(() => {
        const images = Array.from(document.querySelectorAll('img'));
        return images.every(img => img.complete);
      });

      const productCard = page.locator('[class*="product"]').first();
      await expect(productCard).toHaveScreenshot('product-card.png');
    });
  });

  test.describe('Alert Component', () => {
    test('should match baseline screenshot - all alert variants', async ({ page }) => {
      await page.goto('/iframe.html?id=components-alert--all-variants&viewMode=story');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(500);

      // Capture the entire container with all alert variants
      const alertContainer = page.locator('#storybook-root').first();
      await expect(alertContainer).toHaveScreenshot('alerts-all-variants.png');
    });

    test('should match baseline screenshot - success alert', async ({ page }) => {
      await page.goto('/iframe.html?id=components-alert--success&viewMode=story');
      await page.waitForSelector('[role="alert"]', { state: 'visible' });
      await page.waitForTimeout(500);

      const alert = page.locator('[role="alert"]').first();
      await expect(alert).toHaveScreenshot('alert-success.png');
    });
  });

  test.describe('Responsive Design', () => {
    test('should match baseline screenshot - mobile viewport', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });

      await page.goto('/iframe.html?id=components-button--primary&viewMode=story');
      await page.waitForSelector('button', { state: 'visible' });
      await page.waitForTimeout(500);

      const button = page.locator('button').first();
      await expect(button).toHaveScreenshot('button-mobile.png');
    });

    test('should match baseline screenshot - tablet viewport', async ({ page }) => {
      // Set tablet viewport
      await page.setViewportSize({ width: 768, height: 1024 });

      await page.goto('/iframe.html?id=components-card--default&viewMode=story');
      await page.waitForSelector('[class*="card"]', { state: 'visible' });
      await page.waitForTimeout(500);

      const card = page.locator('[class*="card"]').first();
      await expect(card).toHaveScreenshot('card-tablet.png');
    });
  });

  test.describe('Theme Variations', () => {
    test('should match baseline screenshot - dark theme', async ({ page }) => {
      // If your Storybook supports theme switching via URL params
      await page.goto('/iframe.html?id=components-button--primary&viewMode=story&theme=dark');
      await page.waitForSelector('button', { state: 'visible' });
      await page.waitForTimeout(500);

      const button = page.locator('button').first();
      await expect(button).toHaveScreenshot('button-dark-theme.png');
    });
  });
});
