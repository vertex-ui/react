import { test, expect } from '@playwright/test';

test.describe('Storybook Visual Regression Tests', () => {

  test('Components/AdminHeader - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-adminheader--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-adminheader--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/AdminHeader - WithSearch', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-adminheader--with-search&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-adminheader--with-search'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/AdminHeader - DarkTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-adminheader--dark-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-adminheader--dark-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/AdminHeader - PrimaryTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-adminheader--primary-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-adminheader--primary-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/AdminHeader - GradientTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-adminheader--gradient-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-adminheader--gradient-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/AdminHeader - Minimal', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-adminheader--minimal&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-adminheader--minimal'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/AdminHeader - WithBreadcrumbs', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-adminheader--with-breadcrumbs&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-adminheader--with-breadcrumbs'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/AdminHeader - WithoutAvatar', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-adminheader--without-avatar&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-adminheader--without-avatar'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/AdminHeader - WithQuickActions', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-adminheader--with-quick-actions&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-adminheader--with-quick-actions'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/AdminHeader - TransparentWithBlur', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-adminheader--transparent-with-blur&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-adminheader--transparent-with-blur'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/AdminHeader - InteractiveNotifications', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-adminheader--interactive-notifications&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-adminheader--interactive-notifications'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/AdminHeader - MobileOptimized', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-adminheader--mobile-optimized&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-adminheader--mobile-optimized'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/AdminHeader - CompleteDashboard', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-adminheader--complete-dashboard&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-adminheader--complete-dashboard'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/AdminHeader - DarkTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-adminheader--dark-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-adminheader--dark-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/AdminHeader - Minimal', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-adminheader--minimal&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-adminheader--minimal'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/AdminHeader - EcommerceAdmin', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-adminheader--ecommerce-admin&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-adminheader--ecommerce-admin'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/AdminHeader - GradientHeader', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-adminheader--gradient-header&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-adminheader--gradient-header'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/AdminHeader - SaasApplication', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-adminheader--saas-application&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-adminheader--saas-application'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/AdminHeader - CompactMobile', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-adminheader--compact-mobile&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-adminheader--compact-mobile'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/AdminHeader - CorporateHeader', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-adminheader--corporate-header&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-adminheader--corporate-header'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Box - Basic', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-box--basic&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-box--basic'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Box - Spacing', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-box--spacing&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-box--spacing'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Box - FlexLayout', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-box--flex-layout&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-box--flex-layout'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Box - GridLayout', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-box--grid-layout&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-box--grid-layout'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Box - Shadows', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-box--shadows&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-box--shadows'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Box - Card', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-box--card&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-box--card'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Box - Container', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-box--container&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-box--container'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Box - WrappingComponents', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-box--wrapping-components&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-box--wrapping-components'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Box - SemanticHTML', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-box--semantic-html&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-box--semantic-html'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Box - Positioning', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-box--positioning&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-box--positioning'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Accordion - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-accordion--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-accordion--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Accordion - AllowMultiple', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-accordion--allow-multiple&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-accordion--allow-multiple'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Accordion - WithDefaultOpen', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-accordion--with-default-open&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-accordion--with-default-open'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Accordion - Bordered', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-accordion--bordered&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-accordion--bordered'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Accordion - Large', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-accordion--large&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-accordion--large'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Accordion - LeftChevron', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-accordion--left-chevron&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-accordion--left-chevron'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/ActionMenu - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-actionmenu--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-actionmenu--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/ActionMenu - WithIcon', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-actionmenu--with-icon&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-actionmenu--with-icon'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/ActionMenu - IconOnly', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-actionmenu--icon-only&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-actionmenu--icon-only'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/ActionMenu - BottomEnd', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-actionmenu--bottom-end&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-actionmenu--bottom-end'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/ActionMenu - TopStart', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-actionmenu--top-start&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-actionmenu--top-start'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/ActionMenu - WithDividers', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-actionmenu--with-dividers&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-actionmenu--with-dividers'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/ActionMenu - WithShortcuts', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-actionmenu--with-shortcuts&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-actionmenu--with-shortcuts'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/ActionMenu - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-actionmenu--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-actionmenu--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/ActionMenu - CustomTrigger', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-actionmenu--custom-trigger&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-actionmenu--custom-trigger'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/ActionMenu - CustomTriggerWithFunction', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-actionmenu--custom-trigger-with-function&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-actionmenu--custom-trigger-with-function'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/ActionMenu - InTable', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-actionmenu--in-table&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-actionmenu--in-table'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/ActionMenu - WithActiveState', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-actionmenu--with-active-state&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-actionmenu--with-active-state'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Alert - Success', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-alert--success&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-alert--success'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Alert - Error', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-alert--error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-alert--error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Alert - Warning', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-alert--warning&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-alert--warning'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Alert - Info', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-alert--info&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-alert--info'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - WithLabel', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--with-label&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--with-label'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - WithSearchIcon', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--with-search-icon&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--with-search-icon'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - Clearable', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--clearable&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--clearable'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - WithIcons', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--with-icons&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--with-icons'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - CustomGetters', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--custom-getters&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--custom-getters'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - WithFunctions', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--with-functions&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--with-functions'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - Loading', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--loading&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--loading'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - NoOptions', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--no-options&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--no-options'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - FullWidth', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--full-width&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--full-width'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - SmallSize', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--small-size&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--small-size'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - LargeSize', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--large-size&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--large-size'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - WithError', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--with-error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--with-error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - WithSuccess', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--with-success&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--with-success'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Autocomplete - WithHelperText', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-autocomplete--with-helper-text&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-autocomplete--with-helper-text'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Avatar - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-avatar--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-avatar--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Avatar - WithFallback', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-avatar--with-fallback&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-avatar--with-fallback'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Avatar - Small', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-avatar--small&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-avatar--small'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Avatar - Large', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-avatar--large&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-avatar--large'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Avatar - Square', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-avatar--square&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-avatar--square'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Avatar - BrokenImage', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-avatar--broken-image&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-avatar--broken-image'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Avatar - LongFallbackText', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-avatar--long-fallback-text&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-avatar--long-fallback-text'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Avatar - AllSizes', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-avatar--all-sizes&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-avatar--all-sizes'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Badge - Primary', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-badge--primary&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-badge--primary'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Badge - Success', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-badge--success&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-badge--success'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Badge - AllVariants', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-badge--all-variants&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-badge--all-variants'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Breadcrumb - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-breadcrumb--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-breadcrumb--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Breadcrumb - WithIcons', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-breadcrumb--with-icons&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-breadcrumb--with-icons'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Breadcrumb - CustomSeparator', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-breadcrumb--custom-separator&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-breadcrumb--custom-separator'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Breadcrumb - CustomSeparatorIcon', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-breadcrumb--custom-separator-icon&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-breadcrumb--custom-separator-icon'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Breadcrumb - Sizes', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-breadcrumb--sizes&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-breadcrumb--sizes'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Breadcrumb - TwoLevels', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-breadcrumb--two-levels&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-breadcrumb--two-levels'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Breadcrumb - SingleLevel', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-breadcrumb--single-level&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-breadcrumb--single-level'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Breadcrumb - DeepHierarchy', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-breadcrumb--deep-hierarchy&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-breadcrumb--deep-hierarchy'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Breadcrumb - WithMaxItems', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-breadcrumb--with-max-items&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-breadcrumb--with-max-items'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Breadcrumb - CustomLinkComponent', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-breadcrumb--custom-link-component&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-breadcrumb--custom-link-component'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Breadcrumb - IconsAndSeparator', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-breadcrumb--icons-and-separator&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-breadcrumb--icons-and-separator'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Breadcrumb - InCard', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-breadcrumb--in-card&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-breadcrumb--in-card'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Breadcrumb - MultipleExamples', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-breadcrumb--multiple-examples&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-breadcrumb--multiple-examples'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Button - Primary', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-button--primary&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-button--primary'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Button - Secondary', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-button--secondary&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-button--secondary'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Button - Loading', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-button--loading&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-button--loading'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Button - AllVariants', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-button--all-variants&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-button--all-variants'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Card - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-card--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-card--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Card - Elevated', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-card--elevated&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-card--elevated'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Card - Outlined', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-card--outlined&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-card--outlined'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/CarouselWidget - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-carouselwidget--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-carouselwidget--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/CarouselWidget - WithLightOverlay', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-carouselwidget--with-light-overlay&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-carouselwidget--with-light-overlay'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/CarouselWidget - NoOverlay', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-carouselwidget--no-overlay&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-carouselwidget--no-overlay'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/CarouselWidget - MinimalNavigation', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-carouselwidget--minimal-navigation&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-carouselwidget--minimal-navigation'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/CarouselWidget - SingleSlide', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-carouselwidget--single-slide&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-carouselwidget--single-slide'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/CarouselWidget - WithSwiperComponent', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-carouselwidget--with-swiper-component&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-carouselwidget--with-swiper-component'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Checkbox - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkbox--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkbox--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Checkbox - Checked', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkbox--checked&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkbox--checked'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Checkbox - Indeterminate', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkbox--indeterminate&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkbox--indeterminate'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Checkbox - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkbox--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkbox--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Checkbox - DisabledChecked', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkbox--disabled-checked&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkbox--disabled-checked'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Checkbox - WithHelperText', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkbox--with-helper-text&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkbox--with-helper-text'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Checkbox - WithError', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkbox--with-error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkbox--with-error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Checkbox - Small', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkbox--small&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkbox--small'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Checkbox - Large', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkbox--large&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkbox--large'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Checkbox - Success', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkbox--success&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkbox--success'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Checkbox - Warning', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkbox--warning&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkbox--warning'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Checkbox - AllSizes', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkbox--all-sizes&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkbox--all-sizes'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/CheckboxGroup - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkboxgroup--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkboxgroup--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/CheckboxGroup - WithDefaultValues', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkboxgroup--with-default-values&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkboxgroup--with-default-values'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/CheckboxGroup - Horizontal', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkboxgroup--horizontal&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkboxgroup--horizontal'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/CheckboxGroup - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkboxgroup--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkboxgroup--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/CheckboxGroup - WithDisabledOptions', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkboxgroup--with-disabled-options&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkboxgroup--with-disabled-options'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/CheckboxGroup - WithError', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkboxgroup--with-error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkboxgroup--with-error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/CheckboxGroup - Small', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkboxgroup--small&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkboxgroup--small'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/CheckboxGroup - Large', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-checkboxgroup--large&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-checkboxgroup--large'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - Primary', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--primary&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--primary'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - Success', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--success&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--success'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - Error', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - Warning', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--warning&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--warning'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - Info', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--info&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--info'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - Outlined', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--outlined&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--outlined'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - Light', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--light&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--light'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - WithIcon', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--with-icon&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--with-icon'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - WithAvatar', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--with-avatar&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--with-avatar'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - Deletable', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--deletable&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--deletable'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - Clickable', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--clickable&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--clickable'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - Small', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--small&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--small'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - Large', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--large&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--large'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - AllVariants', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--all-variants&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--all-variants'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Chip - AllColors', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-chip--all-colors&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-chip--all-colors'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Container - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-container--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-container--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Container - ExtraSmall', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-container--extra-small&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-container--extra-small'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Container - Small', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-container--small&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-container--small'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Container - Medium', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-container--medium&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-container--medium'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Container - Large', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-container--large&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-container--large'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Container - ExtraLarge', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-container--extra-large&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-container--extra-large'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Container - Fluid', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-container--fluid&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-container--fluid'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Container - NoGutters', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-container--no-gutters&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-container--no-gutters'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Container - NestedContainers', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-container--nested-containers&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-container--nested-containers'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Container - MultipleContainers', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-container--multiple-containers&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-container--multiple-containers'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Container - ResponsivePadding', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-container--responsive-padding&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-container--responsive-padding'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - EcommerceProductShowcase', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--ecommerce-product-showcase&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--ecommerce-product-showcase'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - EcommerceProductGrid', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--ecommerce-product-grid&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--ecommerce-product-grid'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - EcommerceCategoryBanner', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--ecommerce-category-banner&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--ecommerce-category-banner'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - BlogFeaturedPost', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--blog-featured-post&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--blog-featured-post'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - BlogQuoteBlock', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--blog-quote-block&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--blog-quote-block'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - ServiceFeatureHighlight', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--service-feature-highlight&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--service-feature-highlight'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - ServiceTeamMember', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--service-team-member&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--service-team-member'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - ServiceAboutUs', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--service-about-us&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--service-about-us'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - ServiceProcessStep', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--service-process-step&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--service-process-step'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - SaaSFeature', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--saa-sfeature&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--saa-sfeature'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - SaaSPricingCard', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--saa-spricing-card&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--saa-spricing-card'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - SaaSCustomerTestimonial', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--saa-scustomer-testimonial&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--saa-scustomer-testimonial'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - PortfolioProject', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--portfolio-project&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--portfolio-project'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - CTABanner', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--ctabanner&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--ctabanner'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - SplitLayoutFeature', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--split-layout-feature&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--split-layout-feature'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - SidebarLayout', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--sidebar-layout&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--sidebar-layout'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - RealEstateProperty', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--real-estate-property&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--real-estate-property'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - MinimalInfoCard', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--minimal-info-card&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--minimal-info-card'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ContentBlockWidget - CompactFeatureList', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-contentblockwidget--compact-feature-list&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-contentblockwidget--compact-feature-list'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - WithInitialFilters', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--with-initial-filters&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--with-initial-filters'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - ControlledFilters', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--controlled-filters&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--controlled-filters'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - CustomRendering', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--custom-rendering&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--custom-rendering'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - WithRowSelection', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--with-row-selection&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--with-row-selection'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - CompactDensity', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--compact-density&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--compact-density'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - ComfortableDensity', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--comfortable-density&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--comfortable-density'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - AllColumnTypes', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--all-column-types&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--all-column-types'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - WithoutPagination', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--without-pagination&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--without-pagination'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - DisabledFilters', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--disabled-filters&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--disabled-filters'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - LoadingState', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--loading-state&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--loading-state'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - EmptyState', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--empty-state&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--empty-state'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - ComplexFiltering', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--complex-filtering&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--complex-filtering'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - FullFeatured', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--full-featured&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--full-featured'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - PinnedColumns', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--pinned-columns&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--pinned-columns'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - SkeletonLoader', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--skeleton-loader&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--skeleton-loader'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - SkeletonLoaderWithSelection', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--skeleton-loader-with-selection&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--skeleton-loader-with-selection'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - CustomLoadingContent', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--custom-loading-content&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--custom-loading-content'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - EmptyStateWithIcon', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--empty-state-with-icon&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--empty-state-with-icon'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - EmptyStateSearch', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--empty-state-search&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--empty-state-search'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DataGrid - EmptyStateInbox', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datagrid--empty-state-inbox&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datagrid--empty-state-inbox'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - Basic', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--basic&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--basic'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - WithValue', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--with-value&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--with-value'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - ValidationStates', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--validation-states&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--validation-states'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - WithConstraints', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--with-constraints&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--with-constraints'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - WithDisabledDates', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--with-disabled-dates&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--with-disabled-dates'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - DateFormats', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--date-formats&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--date-formats'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - Sizes', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--sizes&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--sizes'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - FullWidth', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--full-width&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--full-width'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - WithoutTodayButton', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--without-today-button&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--without-today-button'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - Clearable', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--clearable&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--clearable'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - DateRangeBasic', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--date-range-basic&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--date-range-basic'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - DateRangeWithPresets', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--date-range-with-presets&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--date-range-with-presets'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - DateRangeCustomPresets', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--date-range-custom-presets&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--date-range-custom-presets'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - DateRangeNoPresets', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--date-range-no-presets&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--date-range-no-presets'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - DateRangeCustomSeparator', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--date-range-custom-separator&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--date-range-custom-separator'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/DatePicker - BookingForm', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-datepicker--booking-form&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-datepicker--booking-form'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Divider - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-divider--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-divider--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Divider - WithText', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-divider--with-text&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-divider--with-text'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Divider - LeftAligned', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-divider--left-aligned&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-divider--left-aligned'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Divider - RightAligned', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-divider--right-aligned&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-divider--right-aligned'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Divider - Vertical', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-divider--vertical&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-divider--vertical'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Divider - VerticalWithText', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-divider--vertical-with-text&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-divider--vertical-with-text'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Divider - Inset', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-divider--inset&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-divider--inset'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Divider - Middle', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-divider--middle&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-divider--middle'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Divider - Light', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-divider--light&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-divider--light'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Divider - FlexItem', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-divider--flex-item&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-divider--flex-item'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - General', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--general&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--general'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - NoSearchResults', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--no-search-results&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--no-search-results'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - NoData', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--no-data&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--no-data'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - NoNotifications', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--no-notifications&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--no-notifications'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - EmptyCart', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--empty-cart&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--empty-cart'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - NoFiles', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--no-files&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--no-files'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - MinimalTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--minimal-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--minimal-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - ModernTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--modern-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--modern-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - ProfessionalTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--professional-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--professional-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - PlayfulTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--playful-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--playful-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - TechnicalTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--technical-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--technical-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - ElegantTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--elegant-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--elegant-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - CustomContent', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--custom-content&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--custom-content'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - WithLinks', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--with-links&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--with-links'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - LeftAligned', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--left-aligned&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--left-aligned'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - CompactMode', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--compact-mode&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--compact-mode'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - WithoutIllustration', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--without-illustration&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--without-illustration'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - DangerVariant', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--danger-variant&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--danger-variant'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - WarningVariant', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--warning-variant&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--warning-variant'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - CustomBackground', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--custom-background&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--custom-background'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - EcommerceEmptyCart', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--ecommerce-empty-cart&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--ecommerce-empty-cart'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - DashboardNoData', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--dashboard-no-data&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--dashboard-no-data'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - InboxEmpty', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--inbox-empty&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--inbox-empty'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - SearchNoResults', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--search-no-results&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--search-no-results'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/EmptyStateWidget - FileManagerEmpty', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-emptystatewidget--file-manager-empty&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-emptystatewidget--file-manager-empty'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FileUpload - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-fileupload--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-fileupload--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FileUpload - WithHelperText', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-fileupload--with-helper-text&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-fileupload--with-helper-text'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FileUpload - WithError', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-fileupload--with-error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-fileupload--with-error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FileUpload - Multiple', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-fileupload--multiple&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-fileupload--multiple'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FileUpload - AcceptImages', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-fileupload--accept-images&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-fileupload--accept-images'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FileUpload - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-fileupload--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-fileupload--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Flex - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-flex--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-flex--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Flex - Column', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-flex--column&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-flex--column'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Flex - Center', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-flex--center&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-flex--center'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Flex - SpaceBetween', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-flex--space-between&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-flex--space-between'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Flex - Wrap', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-flex--wrap&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-flex--wrap'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Flex - ColumnReverse', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-flex--column-reverse&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-flex--column-reverse'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Flex - AlignStretch', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-flex--align-stretch&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-flex--align-stretch'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Flex - GapVariations', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-flex--gap-variations&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-flex--gap-variations'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Flex - Inline', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-flex--inline&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-flex--inline'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FormControl - WithInput', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-formcontrol--with-input&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-formcontrol--with-input'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FormControl - WithTextarea', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-formcontrol--with-textarea&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-formcontrol--with-textarea'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FormControl - WithSelect', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-formcontrol--with-select&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-formcontrol--with-select'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FormControl - WithRichTextEditor', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-formcontrol--with-rich-text-editor&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-formcontrol--with-rich-text-editor'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FormControl - WithError', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-formcontrol--with-error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-formcontrol--with-error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FormControl - WithSuccess', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-formcontrol--with-success&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-formcontrol--with-success'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FormControl - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-formcontrol--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-formcontrol--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FormControl - SpacingVariants', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-formcontrol--spacing-variants&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-formcontrol--spacing-variants'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FormControl - HorizontalLabel', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-formcontrol--horizontal-label&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-formcontrol--horizontal-label'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FormControl - SizeVariants', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-formcontrol--size-variants&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-formcontrol--size-variants'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FormControl - ContactForm', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-formcontrol--contact-form&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-formcontrol--contact-form'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FormControl - ValidationStates', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-formcontrol--validation-states&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-formcontrol--validation-states'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/FormControl - CompleteExample', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-formcontrol--complete-example&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-formcontrol--complete-example'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Grid - BasicGrid', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-grid--basic-grid&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-grid--basic-grid'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Grid - ResponsiveGrid', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-grid--responsive-grid&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-grid--responsive-grid'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Grid - AutoGrid', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-grid--auto-grid&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-grid--auto-grid'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Grid - NestedGrid', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-grid--nested-grid&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-grid--nested-grid'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Grid - DifferentSpacing', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-grid--different-spacing&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-grid--different-spacing'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Grid - CustomBreakpoints', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-grid--custom-breakpoints&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-grid--custom-breakpoints'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/GridCarouselWidget - ProductTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-gridcarouselwidget--product-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-gridcarouselwidget--product-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/GridCarouselWidget - ProductThemeAutoplay', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-gridcarouselwidget--product-theme-autoplay&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-gridcarouselwidget--product-theme-autoplay'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/GridCarouselWidget - ProductThemeSingleScroll', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-gridcarouselwidget--product-theme-single-scroll&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-gridcarouselwidget--product-theme-single-scroll'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/GridCarouselWidget - BaseTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-gridcarouselwidget--base-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-gridcarouselwidget--base-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/GridCarouselWidget - BaseThemeImages', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-gridcarouselwidget--base-theme-images&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-gridcarouselwidget--base-theme-images'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/GridCarouselWidget - BaseThemeMinimal', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-gridcarouselwidget--base-theme-minimal&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-gridcarouselwidget--base-theme-minimal'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/GridCarouselWidget - ResponsiveShowcase', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-gridcarouselwidget--responsive-showcase&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-gridcarouselwidget--responsive-showcase'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/GridCarouselWidget - UsageExamples', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-gridcarouselwidget--usage-examples&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-gridcarouselwidget--usage-examples'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Header - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-header--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-header--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Header - WithSubtitle', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-header--with-subtitle&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-header--with-subtitle'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Header - WithActions', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-header--with-actions&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-header--with-actions'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Header - WithLogo', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-header--with-logo&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-header--with-logo'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Header - WithNavigation', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-header--with-navigation&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-header--with-navigation'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Header - Minimal', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-header--minimal&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-header--minimal'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Header - Elevated', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-header--elevated&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-header--elevated'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Header - Sticky', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-header--sticky&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-header--sticky'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Header - FullFeatured', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-header--full-featured&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-header--full-featured'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Input - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-input--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-input--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Input - WithLabel', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-input--with-label&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-input--with-label'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Input - WithError', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-input--with-error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-input--with-error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Input - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-input--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-input--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Link - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-link--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-link--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Link - Variants', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-link--variants&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-link--variants'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Link - Colors', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-link--colors&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-link--colors'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Link - WithIcons', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-link--with-icons&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-link--with-icons'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Link - NoUnderline', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-link--no-underline&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-link--no-underline'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Link - External', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-link--external&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-link--external'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Link - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-link--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-link--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Link - InText', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-link--in-text&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-link--in-text'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Link - CustomComponent', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-link--custom-component&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-link--custom-component'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Link - AllSizes', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-link--all-sizes&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-link--all-sizes'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Menu - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-menu--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-menu--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Menu - WithSubmenus', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-menu--with-submenus&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-menu--with-submenus'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Menu - HoverTrigger', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-menu--hover-trigger&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-menu--hover-trigger'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Menu - DifferentPlacements', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-menu--different-placements&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-menu--different-placements'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Menu - WithDisabledItems', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-menu--with-disabled-items&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-menu--with-disabled-items'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Menu - MinimalVariant', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-menu--minimal-variant&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-menu--minimal-variant'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Menu - ActiveItems', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-menu--active-items&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-menu--active-items'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Menu - LongMenu', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-menu--long-menu&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-menu--long-menu'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Modal - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-modal--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-modal--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Modal - WithFooter', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-modal--with-footer&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-modal--with-footer'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Modal - Large', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-modal--large&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-modal--large'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Modal - Small', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-modal--small&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-modal--small'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Modal - NoCloseButton', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-modal--no-close-button&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-modal--no-close-button'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Modal - DangerModal', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-modal--danger-modal&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-modal--danger-modal'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Modal - NonClosableBackdrop', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-modal--non-closable-backdrop&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-modal--non-closable-backdrop'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - WithLabel', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--with-label&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--with-label'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - WithHelperText', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--with-helper-text&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--with-helper-text'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - WithDefaultValues', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--with-default-values&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--with-default-values'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - WithError', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--with-error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--with-error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - WithSuccess', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--with-success&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--with-success'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - Small', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--small&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--small'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - Large', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--large&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--large'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - Grouped', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--grouped&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--grouped'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - MaxSelection', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--max-selection&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--max-selection'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - Searchable', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--searchable&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--searchable'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - FullWidth', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--full-width&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--full-width'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/MultiSelect - AllSizes', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-multiselect--all-sizes&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-multiselect--all-sizes'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Navbar - EcommerceStore', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-navbar--ecommerce-store&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-navbar--ecommerce-store'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Navbar - TechStartup', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-navbar--tech-startup&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-navbar--tech-startup'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Navbar - CreativeAgency', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-navbar--creative-agency&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-navbar--creative-agency'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Navbar - EnterpriseCorp', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-navbar--enterprise-corp&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-navbar--enterprise-corp'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Navbar - DigitalNews', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-navbar--digital-news&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-navbar--digital-news'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Navbar - DarkModeSaaS', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-navbar--dark-mode-saa-s&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-navbar--dark-mode-saa-s'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Radio - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radio--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radio--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Radio - Checked', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radio--checked&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radio--checked'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Radio - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radio--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radio--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Radio - DisabledChecked', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radio--disabled-checked&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radio--disabled-checked'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Radio - WithHelperText', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radio--with-helper-text&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radio--with-helper-text'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Radio - WithError', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radio--with-error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radio--with-error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Radio - Small', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radio--small&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radio--small'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Radio - Large', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radio--large&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radio--large'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Radio - Success', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radio--success&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radio--success'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Radio - Warning', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radio--warning&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radio--warning'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Radio - AllSizes', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radio--all-sizes&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radio--all-sizes'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RadioGroup - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radiogroup--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radiogroup--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RadioGroup - WithDefaultValue', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radiogroup--with-default-value&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radiogroup--with-default-value'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RadioGroup - Horizontal', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radiogroup--horizontal&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radiogroup--horizontal'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RadioGroup - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radiogroup--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radiogroup--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RadioGroup - WithDisabledOptions', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radiogroup--with-disabled-options&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radiogroup--with-disabled-options'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RadioGroup - WithError', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radiogroup--with-error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radiogroup--with-error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RadioGroup - WithHelperText', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radiogroup--with-helper-text&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radiogroup--with-helper-text'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RadioGroup - Small', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radiogroup--small&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radiogroup--small'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RadioGroup - Large', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radiogroup--large&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radiogroup--large'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RadioGroup - LongOptions', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-radiogroup--long-options&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-radiogroup--long-options'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Rating - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-rating--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-rating--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Rating - WithValue', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-rating--with-value&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-rating--with-value'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Rating - HalfStars', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-rating--half-stars&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-rating--half-stars'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Rating - Selectable', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-rating--selectable&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-rating--selectable'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Rating - SelectableHalfStars', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-rating--selectable-half-stars&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-rating--selectable-half-stars'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Rating - Sizes', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-rating--sizes&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-rating--sizes'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Rating - Colors', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-rating--colors&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-rating--colors'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Rating - ReadOnly', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-rating--read-only&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-rating--read-only'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Rating - CustomValueFormat', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-rating--custom-value-format&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-rating--custom-value-format'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Rating - InProductReview', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-rating--in-product-review&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-rating--in-product-review'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Rating - ProductRatingExample', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-rating--product-rating-example&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-rating--product-rating-example'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - WithCharacterCount', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--with-character-count&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--with-character-count'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - WithError', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--with-error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--with-error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - WithSuccess', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--with-success&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--with-success'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - Clearable', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--clearable&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--clearable'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - WithCustomToolbar', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--with-custom-toolbar&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--with-custom-toolbar'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - WithoutToolbar', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--without-toolbar&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--without-toolbar'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - BlogPost', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--blog-post&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--blog-post'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - EmailComposer', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--email-composer&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--email-composer'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - CommentBox', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--comment-box&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--comment-box'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - SmallSize', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--small-size&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--small-size'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - MediumSize', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--medium-size&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--medium-size'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - LargeSize', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--large-size&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--large-size'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - InlineVariant', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--inline-variant&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--inline-variant'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - CompleteExample', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--complete-example&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--complete-example'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/RichTextEditor - PrefilledContent', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-richtexteditor--prefilled-content&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-richtexteditor--prefilled-content'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Select - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-select--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-select--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Select - WithLabel', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-select--with-label&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-select--with-label'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Select - WithHelperText', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-select--with-helper-text&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-select--with-helper-text'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Select - WithError', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-select--with-error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-select--with-error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Select - WithSuccess', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-select--with-success&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-select--with-success'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Select - WithDefaultValue', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-select--with-default-value&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-select--with-default-value'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Select - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-select--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-select--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Select - DisabledOptions', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-select--disabled-options&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-select--disabled-options'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Select - Small', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-select--small&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-select--small'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Select - Large', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-select--large&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-select--large'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Select - FullWidth', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-select--full-width&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-select--full-width'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Select - Grouped', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-select--grouped&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-select--grouped'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Select - AllSizes', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-select--all-sizes&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-select--all-sizes'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/SideMenu - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-sidemenu--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-sidemenu--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/SideMenu - Collapsed', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-sidemenu--collapsed&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-sidemenu--collapsed'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/SideMenu - CustomWidth', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-sidemenu--custom-width&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-sidemenu--custom-width'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/SideMenu - SimpleMenu', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-sidemenu--simple-menu&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-sidemenu--simple-menu'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/SideMenu - NestedMenus', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-sidemenu--nested-menus&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-sidemenu--nested-menus'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/SideMenu - WithBadges', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-sidemenu--with-badges&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-sidemenu--with-badges'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - TextVariant', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--text-variant&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--text-variant'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - CircularVariant', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--circular-variant&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--circular-variant'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - RectangularVariant', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--rectangular-variant&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--rectangular-variant'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - RoundedVariant', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--rounded-variant&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--rounded-variant'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - Animations', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--animations&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--animations'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - CardTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--card-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--card-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - ProductTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--product-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--product-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - ArticleTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--article-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--article-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - BlogPostTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--blog-post-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--blog-post-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - ProfileTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--profile-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--profile-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - CommentTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--comment-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--comment-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - ListItemTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--list-item-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--list-item-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - TableRowTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--table-row-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--table-row-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - FormTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--form-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--form-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - HeroTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--hero-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--hero-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - AboutSectionTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--about-section-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--about-section-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - ContentBlockTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--content-block-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--content-block-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - FeatureCardTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--feature-card-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--feature-card-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - TestimonialTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--testimonial-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--testimonial-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - PricingCardTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--pricing-card-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--pricing-card-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - StatsTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--stats-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--stats-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - TeamMemberTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--team-member-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--team-member-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - GalleryItemTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--gallery-item-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--gallery-item-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - VideoCardTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--video-card-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--video-card-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - OrderCardTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--order-card-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--order-card-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - OrderConfirmationTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--order-confirmation-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--order-confirmation-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - OrderDetailsTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--order-details-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--order-details-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - ProductGridTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--product-grid-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--product-grid-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - ECommerceHomePage', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--ecommerce-home-page&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--ecommerce-home-page'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - BlogPage', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--blog-page&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--blog-page'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - AboutUsPage', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--about-us-page&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--about-us-page'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - PricingPage', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--pricing-page&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--pricing-page'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - ContactPage', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--contact-page&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--contact-page'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - DashboardPage', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--dashboard-page&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--dashboard-page'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - UserProfilePage', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--user-profile-page&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--user-profile-page'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - PrivacyPolicyPage', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--privacy-policy-page&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--privacy-policy-page'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Skeleton - GalleryPage', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-skeleton--gallery-page&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-skeleton--gallery-page'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - WithActions', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--with-actions&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--with-actions'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - WithCustomRendering', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--with-custom-rendering&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--with-custom-rendering'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - Sortable', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--sortable&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--sortable'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - Selectable', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--selectable&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--selectable'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - Striped', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--striped&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--striped'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - Bordered', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--bordered&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--bordered'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - Compact', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--compact&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--compact'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - Large', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--large&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--large'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - Loading', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--loading&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--loading'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - SkeletonLoader', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--skeleton-loader&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--skeleton-loader'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - SkeletonLoaderWithSelection', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--skeleton-loader-with-selection&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--skeleton-loader-with-selection'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - CustomLoadingContent', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--custom-loading-content&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--custom-loading-content'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - Empty', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--empty&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--empty'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - EmptyStateWithIcon', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--empty-state-with-icon&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--empty-state-with-icon'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - EmptyStateSearch', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--empty-state-search&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--empty-state-search'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - EmptyStateInbox', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--empty-state-inbox&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--empty-state-inbox'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - LargeDataset', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--large-dataset&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--large-dataset'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - FixedHeader', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--fixed-header&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--fixed-header'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - WithPagination', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--with-pagination&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--with-pagination'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - Dense', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--dense&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--dense'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - WithToolbar', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--with-toolbar&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--with-toolbar'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - SelectableWithPagination', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--selectable-with-pagination&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--selectable-with-pagination'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - ExpandableRows', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--expandable-rows&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--expandable-rows'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - FullFeatures', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--full-features&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--full-features'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Table - WithColumnFilters', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-table--with-column-filters&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-table--with-column-filters'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tabs - Variants', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tabs--variants&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tabs--variants'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tabs - WithIcons', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tabs--with-icons&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tabs--with-icons'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tabs - Vertical', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tabs--vertical&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tabs--vertical'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tabs - Scrollable', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tabs--scrollable&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tabs--scrollable'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tabs - WithScrollControls', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tabs--with-scroll-controls&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tabs--with-scroll-controls'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/TestimonialWidget - CardTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-testimonialwidget--card-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-testimonialwidget--card-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/TestimonialWidget - MinimalTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-testimonialwidget--minimal-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-testimonialwidget--minimal-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/TestimonialWidget - GradientTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-testimonialwidget--gradient-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-testimonialwidget--gradient-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/TestimonialWidget - ModernTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-testimonialwidget--modern-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-testimonialwidget--modern-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/TestimonialWidget - ProfessionalTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-testimonialwidget--professional-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-testimonialwidget--professional-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/TestimonialWidget - GlassmorphismTheme', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-testimonialwidget--glassmorphism-theme&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-testimonialwidget--glassmorphism-theme'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/TestimonialWidget - WithAutoplay', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-testimonialwidget--with-autoplay&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-testimonialwidget--with-autoplay'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/TestimonialWidget - WithoutRatings', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-testimonialwidget--without-ratings&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-testimonialwidget--without-ratings'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/TestimonialWidget - SingleTestimonial', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-testimonialwidget--single-testimonial&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-testimonialwidget--single-testimonial'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/TestimonialWidget - WithoutNavigation', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-testimonialwidget--without-navigation&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-testimonialwidget--without-navigation'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/TestimonialWidget - Compact', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-testimonialwidget--compact&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-testimonialwidget--compact'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/TestimonialWidget - AllThemesShowcase', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-testimonialwidget--all-themes-showcase&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-testimonialwidget--all-themes-showcase'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Text - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-text--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-text--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Text - Headings', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-text--headings&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-text--headings'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Text - BodyText', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-text--body-text&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-text--body-text'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Text - SmallText', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-text--small-text&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-text--small-text'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Text - TextAlignments', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-text--text-alignments&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-text--text-alignments'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Text - FontWeights', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-text--font-weights&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-text--font-weights'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Text - TextTransforms', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-text--text-transforms&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-text--text-transforms'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Text - TextDecorations', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-text--text-decorations&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-text--text-decorations'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Text - Colors', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-text--colors&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-text--colors'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Text - SemanticElements', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-text--semantic-elements&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-text--semantic-elements'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Text - Truncated', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-text--truncated&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-text--truncated'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Text - Gradient', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-text--gradient&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-text--gradient'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Text - WithUtilityClasses', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-text--with-utility-classes&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-text--with-utility-classes'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - WithLabel', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--with-label&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--with-label'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - WithCharacterCount', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--with-character-count&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--with-character-count'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - WithError', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--with-error&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--with-error'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - WithSuccess', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--with-success&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--with-success'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - Required', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--required&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--required'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - Disabled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--disabled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--disabled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - Clearable', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--clearable&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--clearable'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - AutoResize', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--auto-resize&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--auto-resize'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - WithMaxLength', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--with-max-length&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--with-max-length'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - LongForm', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--long-form&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--long-form'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - SmallSize', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--small-size&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--small-size'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - MediumSize', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--medium-size&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--medium-size'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - LargeSize', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--large-size&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--large-size'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - InlineVariant', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--inline-variant&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--inline-variant'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Textarea - CompleteExample', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-textarea--complete-example&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-textarea--complete-example'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - WithDescriptions', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--with-descriptions&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--with-descriptions'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - Numbered', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--numbered&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--numbered'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - CircleVariant', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--circle-variant&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--circle-variant'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - SimpleVariant', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--simple-variant&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--simple-variant'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - Vertical', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--vertical&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--vertical'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - VerticalNumbered', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--vertical-numbered&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--vertical-numbered'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - LargeSize', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--large-size&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--large-size'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - SmallSize', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--small-size&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--small-size'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - ColorVariants', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--color-variants&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--color-variants'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - AllVariants', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--all-variants&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--all-variants'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - CustomIcons', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--custom-icons&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--custom-icons'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - Clickable', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--clickable&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--clickable'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - LongLabels', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--long-labels&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--long-labels'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Timeline - ManySteps', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-timeline--many-steps&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-timeline--many-steps'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - BasicVariants', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--basic-variants&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--basic-variants'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - WithTitleAndDescription', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--with-title-and-description&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--with-title-and-description'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - CustomDuration', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--custom-duration&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--custom-duration'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - WithAction', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--with-action&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--with-action'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - CustomOptions', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--custom-options&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--custom-options'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - CustomIcon', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--custom-icon&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--custom-icon'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - ProgrammaticDismiss', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--programmatic-dismiss&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--programmatic-dismiss'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - UpdateToast', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--update-toast&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--update-toast'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - MultipleToasts', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--multiple-toasts&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--multiple-toasts'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - LoadingPattern', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--loading-pattern&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--loading-pattern'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - FormValidation', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--form-validation&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--form-validation'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - APIOperations', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--apioperations&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--apioperations'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - RealWorldExamples', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--real-world-examples&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--real-world-examples'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Toast - Playground', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-toast--playground&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-toast--playground'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - Default', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--default&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--default'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - Top', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--top&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--top'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - Bottom', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--bottom&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--bottom'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - Left', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--left&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--left'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - Right', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--right&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--right'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - ClickTrigger', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--click-trigger&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--click-trigger'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - FocusTrigger', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--focus-trigger&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--focus-trigger'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - LongContent', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--long-content&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--long-content'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - WithDelay', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--with-delay&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--with-delay'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - NoArrow', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--no-arrow&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--no-arrow'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - CustomContent', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--custom-content&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--custom-content'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - OnDisabledElement', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--on-disabled-element&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--on-disabled-element'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - MultipleTooltips', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--multiple-tooltips&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--multiple-tooltips'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - WithIcon', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--with-icon&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--with-icon'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Tooltip - InteractiveTooltip', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-tooltip--interactive-tooltip&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-tooltip--interactive-tooltip'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Widget - MetricWidgets', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-widget--metric-widgets&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-widget--metric-widgets'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Widget - InfoWidgets', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-widget--info-widgets&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-widget--info-widgets'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Widget - AutoGrid', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-widget--auto-grid&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-widget--auto-grid'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Widget - ThemeComparison', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-widget--theme-comparison&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-widget--theme-comparison'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Widget - ProductWidgets', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-widget--product-widgets&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-widget--product-widgets'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Widget - SingleProduct', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-widget--single-product&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-widget--single-product'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Widget - ProductWithLoading', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-widget--product-with-loading&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-widget--product-with-loading'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Components/Widget - ProductWithAllFeatures', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=components-widget--product-with-all-features&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'components-widget--product-with-all-features'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/DashboardCard - StatCardBasic', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-dashboardcard--stat-card-basic&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-dashboardcard--stat-card-basic'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/DashboardCard - StatCardWithTrend', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-dashboardcard--stat-card-with-trend&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-dashboardcard--stat-card-with-trend'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/DashboardCard - StatCardNegativeTrend', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-dashboardcard--stat-card-negative-trend&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-dashboardcard--stat-card-negative-trend'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/DashboardCard - ProgressCardBasic', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-dashboardcard--progress-card-basic&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-dashboardcard--progress-card-basic'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/DashboardCard - ProgressCardOnTrack', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-dashboardcard--progress-card-on-track&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-dashboardcard--progress-card-on-track'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/DashboardCard - ProgressCardAtRisk', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-dashboardcard--progress-card-at-risk&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-dashboardcard--progress-card-at-risk'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/DashboardCard - ComparisonCardHorizontal', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-dashboardcard--comparison-card-horizontal&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-dashboardcard--comparison-card-horizontal'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/DashboardCard - ComparisonCardVertical', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-dashboardcard--comparison-card-vertical&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-dashboardcard--comparison-card-vertical'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - Error404Modern', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--error404modern&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--error404modern'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - Error404Minimal', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--error404minimal&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--error404minimal'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - Error404Professional', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--error404professional&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--error404professional'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - Error404Playful', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--error404playful&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--error404playful'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - Error404Technical', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--error404technical&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--error404technical'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - Error404Elegant', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--error404elegant&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--error404elegant'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - Error500Modern', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--error500modern&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--error500modern'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - Error500Professional', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--error500professional&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--error500professional'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - Error403Modern', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--error403modern&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--error403modern'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - Error401Modern', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--error401modern&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--error401modern'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - Error503Modern', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--error503modern&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--error503modern'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - SearchNotFoundModern', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--search-not-found-modern&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--search-not-found-modern'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - CustomErrorNoIllustration', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--custom-error-no-illustration&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--custom-error-no-illustration'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - CustomBackground', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--custom-background&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--custom-background'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - CustomSolidBackground', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--custom-solid-background&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--custom-solid-background'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - DarkCustomBackground', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--dark-custom-background&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--dark-custom-background'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - LeftAligned', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--left-aligned&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--left-aligned'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - Compact', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--compact&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--compact'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ErrorPageWidget - AllThemesComparison', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-errorpagewidget--all-themes-comparison&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-errorpagewidget--all-themes-comparison'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/InfoCard - Base', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-infocard--base&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-infocard--base'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/InfoCard - BaseVariants', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-infocard--base-variants&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-infocard--base-variants'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/InfoCard - Metric', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-infocard--metric&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-infocard--metric'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/InfoCard - MetricCustom', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-infocard--metric-custom&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-infocard--metric-custom'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/InfoListCard - PaymentInformation', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-infolistcard--payment-information&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-infolistcard--payment-information'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/InfoListCard - MultipleCards', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-infolistcard--multiple-cards&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-infolistcard--multiple-cards'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/InfoText - Base', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-infotext--base&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-infotext--base'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/InfoText - Stat', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-infotext--stat&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-infotext--stat'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/InfoText - Feature', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-infotext--feature&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-infotext--feature'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/InfoText - Compact', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-infotext--compact&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-infotext--compact'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/InfoText - MixedUsage', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-infotext--mixed-usage&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-infotext--mixed-usage'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/InfoText - GridLayout', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-infotext--grid-layout&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-infotext--grid-layout'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/InfoText - FeatureGrid', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-infotext--feature-grid&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-infotext--feature-grid'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderCard - Delivered', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-ordercard--delivered&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-ordercard--delivered'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderCard - Loading', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-ordercard--loading&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-ordercard--loading'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderCard - OrdersList', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-ordercard--orders-list&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-ordercard--orders-list'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderConfirmation - Complete', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderconfirmation--complete&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderconfirmation--complete'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderConfirmation - Simple', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderconfirmation--simple&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderconfirmation--simple'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderConfirmation - WithDiscount', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderconfirmation--with-discount&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderconfirmation--with-discount'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderConfirmation - LargeOrder', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderconfirmation--large-order&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderconfirmation--large-order'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderConfirmation - Processing', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderconfirmation--processing&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderconfirmation--processing'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderConfirmation - Loading', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderconfirmation--loading&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderconfirmation--loading'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderConfirmation - Delivered', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderconfirmation--delivered&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderconfirmation--delivered'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderDetails - Complete', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderdetails--complete&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderdetails--complete'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderDetails - Processing', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderdetails--processing&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderdetails--processing'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderDetails - Delivered', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderdetails--delivered&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderdetails--delivered'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderDetails - Shipped', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderdetails--shipped&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderdetails--shipped'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderDetails - Cancelled', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderdetails--cancelled&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderdetails--cancelled'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderDetails - Pending', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderdetails--pending&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderdetails--pending'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderDetails - LargeOrder', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderdetails--large-order&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderdetails--large-order'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/OrderDetails - Loading', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-orderdetails--loading&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-orderdetails--loading'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ProductCard - Basic', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-productcard--basic&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-productcard--basic'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ProductCard - Loading', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-productcard--loading&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-productcard--loading'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ProductCard - WithWishlist', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-productcard--with-wishlist&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-productcard--with-wishlist'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ProductCard - FeaturedProduct', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-productcard--featured-product&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-productcard--featured-product'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ProductCard - FeaturedGrid', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-productcard--featured-grid&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-productcard--featured-grid'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ProductCard - WithQuickView', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-productcard--with-quick-view&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-productcard--with-quick-view'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ProductCard - FullyInteractive', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-productcard--fully-interactive&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-productcard--fully-interactive'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ProductCard - ProductGrid', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-productcard--product-grid&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-productcard--product-grid'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });

  test('Widgets/ProductCard - Interactive', async ({ page }) => {
    // Navigate to the story iframe
    await page.goto('/iframe.html?id=widgets-productcard--interactive&viewMode=story', { waitUntil: 'domcontentloaded' });
    
    // Wait for the root element or a specific selector to ensure render
    // we use a generic wait for now
    await page.waitForSelector('#storybook-root, #root', { state: 'attached' });
    
    // Add a small delay for animations/fonts
    await page.waitForTimeout(1000);

    // Take a screenshot
    // Using a consistent naming for snapshots
    await expect(page).toHaveScreenshot(`${'widgets-productcard--interactive'}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });
});
