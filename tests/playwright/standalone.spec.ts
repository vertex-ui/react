import { test, expect } from '@playwright/test';
import path from 'path';

/**
 * Visual Tests using Standalone Test Page
 *
 * These tests use the standalone test-page.html file instead of Storybook.
 * This is useful for testing components in isolation without Storybook overhead.
 */

test.describe('VTX UI Components - Standalone Page Tests', () => {

  // Navigate to the local test page before each test
  test.beforeEach(async ({ page }) => {
    // Load the standalone test page
    const testPagePath = path.join(__dirname, 'test-page.html');
    await page.goto(`file://${testPagePath}`);

    // Wait for page to be fully loaded
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(300);
  });

  test.describe('Component Sections', () => {
    test('should match baseline - entire buttons section', async ({ page }) => {
      const buttonsSection = page.locator('#buttons');
      await expect(buttonsSection).toHaveScreenshot('standalone-buttons-section.png');
    });

    test('should match baseline - entire inputs section', async ({ page }) => {
      const inputsSection = page.locator('#inputs');
      await expect(inputsSection).toHaveScreenshot('standalone-inputs-section.png');
    });

    test('should match baseline - entire cards section', async ({ page }) => {
      const cardsSection = page.locator('#cards');
      await expect(cardsSection).toHaveScreenshot('standalone-cards-section.png');
    });

    test('should match baseline - entire alerts section', async ({ page }) => {
      const alertsSection = page.locator('#alerts');
      await expect(alertsSection).toHaveScreenshot('standalone-alerts-section.png');
    });

    test('should match baseline - product cards section', async ({ page }) => {
      const productCardsSection = page.locator('#product-cards');
      await expect(productCardsSection).toHaveScreenshot('standalone-product-cards-section.png');
    });
  });

  test.describe('Full Page Screenshots', () => {
    test('should match baseline - full page', async ({ page }) => {
      // Capture entire page
      await expect(page).toHaveScreenshot('standalone-full-page.png', {
        fullPage: true,
      });
    });

    test('should match baseline - full page mobile', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 812 });
      await page.reload();
      await page.waitForLoadState('domcontentloaded');
      await page.waitForTimeout(300);

      await expect(page).toHaveScreenshot('standalone-full-page-mobile.png', {
        fullPage: true,
      });
    });
  });

  test.describe('Interactive States', () => {
    test('should match baseline - modal open state', async ({ page }) => {
      // Click button to open modal
      await page.click('#open-modal');

      // Wait for modal animation
      await page.waitForTimeout(300);

      // Capture modal overlay
      const modalOverlay = page.locator('#modal-overlay');
      await expect(modalOverlay).toHaveScreenshot('standalone-modal-open.png');
    });

    test('should match baseline - button hover states', async ({ page }) => {
      const primaryButton = page.locator('.vtx-button-primary').first();

      // Hover over button
      await primaryButton.hover();
      await page.waitForTimeout(200);

      await expect(primaryButton).toHaveScreenshot('standalone-button-hover.png');
    });

    test('should match baseline - input focus state', async ({ page }) => {
      const input = page.locator('.vtx-input').first();

      // Focus the input
      await input.focus();
      await page.waitForTimeout(200);

      await expect(input).toHaveScreenshot('standalone-input-focus.png');
    });

    test('should match baseline - card hover effect', async ({ page }) => {
      const card = page.locator('.vtx-card').first();

      // Hover over card
      await card.hover();
      await page.waitForTimeout(200);

      await expect(card).toHaveScreenshot('standalone-card-hover.png');
    });

    test('should match baseline - product card hover', async ({ page }) => {
      const productCard = page.locator('.vtx-product-card').first();

      // Hover over product card
      await productCard.hover();
      await page.waitForTimeout(200);

      await expect(productCard).toHaveScreenshot('standalone-product-card-hover.png');
    });
  });

  test.describe('Individual Components', () => {
    test('should match baseline - primary button', async ({ page }) => {
      const button = page.locator('.vtx-button-primary').first();
      await expect(button).toHaveScreenshot('standalone-btn-primary.png');
    });

    test('should match baseline - secondary button', async ({ page }) => {
      const button = page.locator('.vtx-button-secondary').first();
      await expect(button).toHaveScreenshot('standalone-btn-secondary.png');
    });

    test('should match baseline - danger button', async ({ page }) => {
      const button = page.locator('.vtx-button-danger').first();
      await expect(button).toHaveScreenshot('standalone-btn-danger.png');
    });

    test('should match baseline - disabled button', async ({ page }) => {
      const button = page.locator('.vtx-button:disabled').first();
      await expect(button).toHaveScreenshot('standalone-btn-disabled.png');
    });

    test('should match baseline - input with error', async ({ page }) => {
      const errorInputContainer = page.locator('.vtx-input.error').locator('..');
      await expect(errorInputContainer).toHaveScreenshot('standalone-input-error-state.png');
    });

    test('should match baseline - success alert', async ({ page }) => {
      const alert = page.locator('.vtx-alert-success');
      await expect(alert).toHaveScreenshot('standalone-alert-success.png');
    });

    test('should match baseline - warning alert', async ({ page }) => {
      const alert = page.locator('.vtx-alert-warning');
      await expect(alert).toHaveScreenshot('standalone-alert-warning.png');
    });

    test('should match baseline - error alert', async ({ page }) => {
      const alert = page.locator('.vtx-alert-error');
      await expect(alert).toHaveScreenshot('standalone-alert-error.png');
    });

    test('should match baseline - info alert', async ({ page }) => {
      const alert = page.locator('.vtx-alert-info');
      await expect(alert).toHaveScreenshot('standalone-alert-info.png');
    });
  });

  test.describe('Responsive Breakpoints', () => {
    const viewports = [
      { name: 'mobile-small', width: 320, height: 568 },
      { name: 'mobile', width: 375, height: 667 },
      { name: 'mobile-large', width: 414, height: 896 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'desktop', width: 1280, height: 720 },
      { name: 'desktop-large', width: 1920, height: 1080 },
    ];

    for (const viewport of viewports) {
      test(`should match baseline - ${viewport.name} viewport`, async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.reload();
        await page.waitForLoadState('domcontentloaded');
        await page.waitForTimeout(300);

        const container = page.locator('.container');
        await expect(container).toHaveScreenshot(`standalone-${viewport.name}.png`);
      });
    }
  });

  test.describe('Component Interactions', () => {
    test('should match baseline - modal closed state', async ({ page }) => {
      const modalOverlay = page.locator('#modal-overlay');
      await expect(modalOverlay).toHaveScreenshot('standalone-modal-closed.png');
    });

    test('should match baseline - modal after close', async ({ page }) => {
      // Open modal
      await page.click('#open-modal');
      await page.waitForTimeout(300);

      // Close modal
      await page.click('#close-modal');
      await page.waitForTimeout(300);

      const modalOverlay = page.locator('#modal-overlay');
      await expect(modalOverlay).toHaveScreenshot('standalone-modal-after-close.png');
    });

    test('should match baseline - filled input', async ({ page }) => {
      const input = page.locator('.vtx-input').first();

      // Fill input
      await input.fill('Test Value');
      await input.blur();
      await page.waitForTimeout(200);

      await expect(input).toHaveScreenshot('standalone-input-filled.png');
    });
  });
});
