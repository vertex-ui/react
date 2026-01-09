import { test, expect } from '@playwright/test';

test.describe('VTX UI Navigation Components Visual Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  // ==================== Breadcrumb ====================
  test.describe('Breadcrumb Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-breadcrumb--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('nav[aria-label="breadcrumb"]').first();
      await expect(el).toHaveScreenshot('breadcrumb-default.png');
    });
  });

  // ==================== Link ====================
  test.describe('Link Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-link--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('a').first();
      await expect(el).toHaveScreenshot('link-default.png');
    });
  });

  // ==================== Menu ====================
  test.describe('Menu Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-menu--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-menu').first().or(page.locator('button').first()); // Assuming trigger button
      await expect(el).toHaveScreenshot('menu-default.png');
    });
  });

  // ==================== Navbar ====================
  test.describe('Navbar Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-navbar--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('nav').first();
      await expect(el).toHaveScreenshot('navbar-default.png');
    });
  });

  // ==================== SideMenu ====================
  test.describe('SideMenu Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-sidemenu--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('aside').first().or(page.locator('.vtx-sidemenu'));
      await expect(el).toHaveScreenshot('sidemenu-default.png');
    });
  });

  // ==================== Tabs ====================
  test.describe('Tabs Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-tabs--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('[role="tablist"]').first().locator('..');
      await expect(el).toHaveScreenshot('tabs-default.png');
    });
  });

  // ==================== Header ====================
  test.describe('Header Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-header--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('header').first();
      await expect(el).toHaveScreenshot('header-default.png');
    });
  });

});
