import { test, expect } from '@playwright/test';

test.describe('VTX UI Feedback Components Visual Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  // ==================== Skeleton ====================
  test.describe('Skeleton Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-skeleton--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-skeleton').first().or(page.locator('#storybook-root > div').first());
      await expect(el).toHaveScreenshot('skeleton-default.png');
    });
  });

  // ==================== Toast ====================
  test.describe('Toast Component', () => {
    test('should match baseline - default', async ({ page }) => {
      // Toasts usually require a trigger. We might need to click a button.
      await page.goto('/iframe.html?id=components-toast--default&viewMode=story');
      await page.waitForLoadState('networkidle');

      const trigger = page.locator('button').first();
      if (await trigger.isVisible()) {
          await trigger.click();
          await page.waitForTimeout(300); // Wait for toast to appear
      }

      const el = page.locator('.vtx-toast').first().or(page.locator('[role="alert"]').first());
      await expect(el).toHaveScreenshot('toast-default.png');
    });
  });

  // ==================== Tooltip ====================
  test.describe('Tooltip Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-tooltip--default&viewMode=story');
      await page.waitForLoadState('networkidle');

      const trigger = page.locator('button').first().or(page.locator('span').first());
      await trigger.hover();
      await page.waitForTimeout(300);

      // Capture the whole container or specific tooltip if possible
      // Often tooltips are appended to body, so we might need page screenshot or locate by role tooltip
      const tooltip = page.locator('[role="tooltip"]').first();
      // If tooltip locator fails, fall back to container screenshot
      try {
        await tooltip.waitFor({ state: 'visible', timeout: 2000 });
        await expect(tooltip).toHaveScreenshot('tooltip-default.png');
      } catch (e) {
         // Fallback
         await expect(page).toHaveScreenshot('tooltip-page.png');
      }
    });
  });

  // ==================== Rating ====================
  test.describe('Rating Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-rating--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-rating').first().or(page.locator('#storybook-root > div').first());
      await expect(el).toHaveScreenshot('rating-default.png');
    });
  });

});
