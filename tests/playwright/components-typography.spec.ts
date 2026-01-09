import { test, expect } from '@playwright/test';

test.describe('VTX UI Typography Components Visual Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  // ==================== Text ====================
  test.describe('Text Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-text--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-text').first().or(page.locator('p').first());
      await expect(el).toHaveScreenshot('text-default.png');
    });
  });

});
