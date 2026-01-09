import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration for Visual Regression Testing
 * 
 * This configuration enables:
 * - Multi-browser testing (Chromium, Firefox, WebKit)
 * - Visual regression testing with screenshot comparison
 * - Configurable thresholds for pixel differences
 * - Baseline screenshot management
 */
export default defineConfig({
  // Directory where test files are located
  testDir: './tests/playwright',
  
  // Directory for test artifacts (screenshots, videos, traces)
  outputDir: './tests/playwright/test-results',
  
  // Maximum time one test can run for
  timeout: 30 * 1000,
  
  // Run tests in files in parallel
  fullyParallel: true,
  
  // Fail the build on CI if you accidentally left test.only in the source code
  forbidOnly: !!process.env.CI,
  
  // Retry on CI only
  retries: process.env.CI ? 2 : 0,
  
  // Opt out of parallel tests on CI to avoid resource contention
  workers: process.env.CI ? 1 : undefined,
  
  // Reporter configuration
  // Uses 'html' reporter for detailed local results, 'github' for CI annotations
  reporter: process.env.CI 
    ? [['github'], ['html', { outputFolder: 'playwright-report' }]]
    : [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  
  // Shared settings for all projects
  use: {
    // Base URL for page.goto('/')
    baseURL: 'http://localhost:6006',
    
    // Collect trace on first retry only (helps debug flaky tests)
    trace: 'on-first-retry',
    
    // Screenshot on failure
    screenshot: 'only-on-failure',
    
    // Video on failure
    video: 'retain-on-failure',
    
    // Viewport size (can be overridden per test)
    viewport: { width: 1280, height: 720 },
  },

  // Configure screenshot comparison behavior
  expect: {
    toHaveScreenshot: {
      // Maximum pixel ratio difference between baseline and current screenshot
      // 0.2 means 20% of pixels can differ
      maxDiffPixelRatio: 0.2,
      
      // Maximum number of pixels allowed to differ
      // Useful for catching small rendering inconsistencies
      maxDiffPixels: 100,
      
      // Threshold for considering a pixel as different (0-1 scale)
      // Lower values are more strict
      threshold: 0.2,
      
      // Animations can cause flakiness, set to 'disabled' or 'allow'
      animations: 'disabled',
      
      // CSS animations and transitions
      // 'allow' | 'disabled' | { allowStateMismatch: true }
      // Using 'disabled' prevents animation-related flakiness
      scale: 'css',
    },
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Chromium-specific screenshot directory
        // Baseline screenshots will be stored in tests/playwright/__screenshots__/chromium/
        screenshot: 'only-on-failure',
      },
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        // Firefox-specific screenshot directory
        screenshot: 'only-on-failure',
      },
    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        // WebKit-specific screenshot directory
        screenshot: 'only-on-failure',
      },
    },

    // Uncomment to test on mobile viewports
    // {
    //   name: 'Mobile Chrome',
    //   use: { 
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { 
    //     ...devices['iPhone 12'],
    //   },
    // },
  ],

  // Run your local dev server before starting the tests
  // Uncomment if you want Playwright to automatically start Storybook
  // webServer: {
  //   command: 'npm run storybook',
  //   url: 'http://localhost:6006',
  //   reuseExistingServer: !process.env.CI,
  //   timeout: 120 * 1000,
  // },
});
