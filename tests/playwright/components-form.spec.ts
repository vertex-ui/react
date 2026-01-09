import { test, expect } from '@playwright/test';

test.describe('VTX UI Form Components Visual Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  // ==================== Autocomplete ====================
  test.describe('Autocomplete Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-autocomplete--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-autocomplete').first().or(page.locator('input').first());
      await expect(el).toHaveScreenshot('autocomplete-default.png');
    });
  });

  // ==================== CheckboxGroup ====================
  test.describe('CheckboxGroup Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-checkboxgroup--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('#storybook-root').first();
      await expect(el).toHaveScreenshot('checkboxgroup-default.png');
    });
  });

  // ==================== DatePicker ====================
  test.describe('DatePicker Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-datepicker--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-datepicker').first().or(page.locator('input').first());
      await expect(el).toHaveScreenshot('datepicker-default.png');
    });
  });

  // ==================== FileUpload ====================
  test.describe('FileUpload Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-fileupload--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-fileupload').first().or(page.locator('[class*="dropzone"]'));
      await expect(el).toHaveScreenshot('fileupload-default.png');
    });
  });

  // ==================== FormControl ====================
  test.describe('FormControl Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-formcontrol--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-form-control').first().or(page.locator('#storybook-root > div').first());
      await expect(el).toHaveScreenshot('formcontrol-default.png');
    });
  });

  // ==================== MultiSelect ====================
  test.describe('MultiSelect Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-multiselect--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-multiselect').first().or(page.locator('[class*="select"]'));
      await expect(el).toHaveScreenshot('multiselect-default.png');
    });
  });

  // ==================== Radio ====================
  test.describe('Radio Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-radio--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('label').first();
      await expect(el).toHaveScreenshot('radio-default.png');
    });
  });

  // ==================== RadioGroup ====================
  test.describe('RadioGroup Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-radiogroup--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('#storybook-root').first();
      await expect(el).toHaveScreenshot('radiogroup-default.png');
    });
  });

  // ==================== Select ====================
  test.describe('Select Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-select--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-select').first().or(page.locator('[class*="select"]'));
      await expect(el).toHaveScreenshot('select-default.png');
    });
  });

  // ==================== Textarea ====================
  test.describe('Textarea Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-textarea--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('textarea').first();
      await expect(el).toHaveScreenshot('textarea-default.png');
    });
  });

  // ==================== RichTextEditor ====================
  test.describe('RichTextEditor Component', () => {
    test('should match baseline - default', async ({ page }) => {
      await page.goto('/iframe.html?id=components-richtexteditor--default&viewMode=story');
      await page.waitForLoadState('networkidle');
      const el = page.locator('.vtx-richtexteditor').first().or(page.locator('[contenteditable="true"]').locator('..'));
      await expect(el).toHaveScreenshot('richtexteditor-default.png');
    });
  });

});
