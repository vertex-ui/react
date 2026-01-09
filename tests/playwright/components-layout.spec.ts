import { test, expect } from '@playwright/test';

test.describe('VTX UI Layout Components Visual Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  // ==================== Box ====================
  test.describe('Box Component', () => {
    test('should match baseline - default box', async ({ page }) => {
      // Assuming a story like 'components-box--default'
      await page.goto('/iframe.html?id=components-box--default&viewMode=story');
      await page.waitForLoadState('networkidle');

      const box = page.locator('.vtx-box').first().or(page.locator('#storybook-root > div').first());
      await expect(box).toHaveScreenshot('box-default.png');
    });
  });

  // ==================== Container ====================
  test.describe('Container Component', () => {
    test('should match baseline - default container', async ({ page }) => {
      await page.goto('/iframe.html?id=components-container--default&viewMode=story');
      await page.waitForLoadState('networkidle');

      const container = page.locator('.vtx-container').first().or(page.locator('#storybook-root > div').first());
      await expect(container).toHaveScreenshot('container-default.png');
    });
  });

  // ==================== Flex ====================
  test.describe('Flex Component', () => {
    test('should match baseline - default flex', async ({ page }) => {
      await page.goto('/iframe.html?id=components-flex--default&viewMode=story');
      await page.waitForLoadState('networkidle');

      const flex = page.locator('.vtx-flex').first().or(page.locator('#storybook-root > div').first());
      await expect(flex).toHaveScreenshot('flex-default.png');
    });
  });

  // ==================== Grid ====================
  test.describe('Grid Component', () => {
    test('should match baseline - default grid', async ({ page }) => {
      await page.goto('/iframe.html?id=components-grid--default&viewMode=story');
      await page.waitForLoadState('networkidle');

      const grid = page.locator('.vtx-grid').first().or(page.locator('#storybook-root > div').first());
      await expect(grid).toHaveScreenshot('grid-default.png');
    });
  });

  // ==================== Divider ====================
  test.describe('Divider Component', () => {
    test('should match baseline - default divider', async ({ page }) => {
      await page.goto('/iframe.html?id=components-divider--default&viewMode=story');
      await page.waitForLoadState('networkidle');

      const divider = page.locator('.vtx-divider').first().or(page.locator('hr').first());
      await expect(divider).toHaveScreenshot('divider-default.png');
    });
  });

});
