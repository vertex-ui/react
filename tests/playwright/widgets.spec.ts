import { test, expect } from '@playwright/test';

test.describe('VTX UI Widgets Visual Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  // ==================== DashboardCard ====================
  test.describe('DashboardCard Widget', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-dashboardcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      // Wait for charts or data to load if any
      await page.waitForTimeout(500);
      const el = page.locator('.vtx-dashboard-card').first().or(page.locator('.vtx-card').first());
      await expect(el).toHaveScreenshot('dashboardcard-default.png');
    });
  });

  // ==================== InfoCard ====================
  test.describe('InfoCard Widget', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-infocard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-info-card').first().or(page.locator('.vtx-card').first());
      await expect(el).toHaveScreenshot('infocard-default.png');
    });
  });

  // ==================== InfoListCard ====================
  test.describe('InfoListCard Widget', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-infolistcard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-info-list-card').first().or(page.locator('.vtx-card').first());
      await expect(el).toHaveScreenshot('infolistcard-default.png');
    });
  });

  // ==================== InfoText ====================
  test.describe('InfoText Widget', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-infotext--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-info-text').first().or(page.locator('#storybook-root > div').first());
      await expect(el).toHaveScreenshot('infotext-default.png');
    });
  });

  // ==================== OrderCard ====================
  test.describe('OrderCard Widget', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-ordercard--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-order-card').first().or(page.locator('.vtx-card').first());
      await expect(el).toHaveScreenshot('ordercard-default.png');
    });
  });

  // ==================== OrderConfirmation ====================
  test.describe('OrderConfirmation Widget', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-orderconfirmation--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-order-confirmation').first().or(page.locator('#storybook-root > div').first());
      await expect(el).toHaveScreenshot('orderconfirmation-default.png');
    });
  });

  // ==================== OrderDetails ====================
  test.describe('OrderDetails Widget', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=widgets-orderdetails--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-order-details').first().or(page.locator('#storybook-root > div').first());
      await expect(el).toHaveScreenshot('orderdetails-default.png');
    });
  });

});
