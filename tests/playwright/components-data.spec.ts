import { test, expect } from '@playwright/test';

test.describe('VTX UI Data Display Components Visual Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  // ==================== Accordion ====================
  test.describe('Accordion Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-accordion--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-accordion').first().or(page.locator('#storybook-root > div').first());
      await expect(el).toHaveScreenshot('accordion-default.png');
    });
  });

  // ==================== Chip ====================
  test.describe('Chip Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-chip--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-chip').first();
      await expect(el).toHaveScreenshot('chip-default.png');
    });
  });

  // ==================== DataGrid ====================
  test.describe('DataGrid Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-datagrid--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-datagrid').first().or(page.locator('table').first());
      await expect(el).toHaveScreenshot('datagrid-default.png');
    });
  });

  // ==================== Table ====================
  test.describe('Table Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-table--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('table').first();
      await expect(el).toHaveScreenshot('table-default.png');
    });
  });

  // ==================== Timeline ====================
  test.describe('Timeline Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-timeline--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-timeline').first().or(page.locator('ul').first());
      await expect(el).toHaveScreenshot('timeline-default.png');
    });
  });

});
