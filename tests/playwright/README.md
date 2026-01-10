# Playwright Visual Regression Testing

This directory contains Playwright tests for visual regression testing of VTX UI components. Visual regression testing helps catch unintended CSS changes and ensures visual consistency across browsers and updates.

## 📋 Table of Contents

- [Overview](#overview)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Understanding Visual Regression](#understanding-visual-regression)
- [Updating Baseline Screenshots](#updating-baseline-screenshots)
- [CI/CD Integration](#cicd-integration)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

Visual regression tests work by:
1. **Capturing baseline screenshots** of components in their initial "correct" state
2. **Comparing new screenshots** against baselines during test runs
3. **Flagging differences** that exceed configured thresholds
4. **Storing results** for review and debugging

Our setup tests components across three browsers:
- **Chromium** (Chrome/Edge)
- **Firefox**
- **WebKit** (Safari)

## 🚀 Setup

### Prerequisites

Playwright is already installed as a dev dependency. To install browsers:

```bash
npx playwright install
```

This downloads Chromium, Firefox, and WebKit browsers needed for testing.

### Install with System Dependencies (Linux/CI)

On Linux or in CI environments, you may need system dependencies:

```bash
npx playwright install --with-deps
```

## 🧪 Running Tests

### Run All Tests

Execute all visual regression tests across all browsers:

```bash
npm run test:playwright
```

### Run Tests in UI Mode (Interactive)

Playwright's UI mode provides a visual interface to run and debug tests:

```bash
npm run test:playwright:ui
```

Features of UI mode:
- Watch tests run in real-time
- View screenshots side-by-side
- Time travel through test steps
- Filter and search tests

### Debug Mode

Run tests with debugging enabled (opens DevTools):

```bash
npm run test:playwright:debug
```

### Run Specific Test File

```bash
npx playwright test ui.spec.ts
```

### Run Specific Test by Name

```bash
npx playwright test --grep "Button Component"
```

### Run Tests in Specific Browser

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### View Test Report

After tests complete, view the HTML report:

```bash
npm run test:playwright:report
```

The report includes:
- Test results and durations
- Failed screenshot comparisons (with visual diffs)
- Traces for debugging
- Full test logs

## 📸 Understanding Visual Regression

### How It Works

1. **First Run**: When you run tests for the first time, Playwright captures baseline screenshots
   - Stored in: `tests/playwright/__screenshots__/[browser]/[test-name].png`

2. **Subsequent Runs**: Tests compare current screenshots against baselines
   - **Pass**: If differences are within threshold
   - **Fail**: If differences exceed threshold

3. **Failure Artifacts**: When tests fail, Playwright generates:
   - **Actual screenshot**: What the component currently looks like
   - **Expected screenshot**: The baseline image
   - **Diff image**: Highlighted differences in red

### Screenshot Configuration

Screenshots are configured in [playwright.config.ts](../../playwright.config.ts):

```typescript
expect: {
  toHaveScreenshot: {
    maxDiffPixelRatio: 0.2,  // Max 20% of pixels can differ
    maxDiffPixels: 100,       // Or max 100 total pixels
    threshold: 0.2,           // Sensitivity for pixel comparison
    animations: 'disabled',   // Prevent flaky tests from animations
  },
},
```

### Directory Structure

```
tests/playwright/
├── __screenshots__/          # Baseline screenshots (committed to repo)
│   ├── chromium/
│   │   ├── button-primary.png
│   │   ├── input-default.png
│   │   └── ...
│   ├── firefox/
│   └── webkit/
├── test-results/             # Test run artifacts (not committed)
│   ├── actual/               # Current screenshots
│   ├── expected/             # Baseline screenshots (copied)
│   ├── diff/                 # Difference images
│   └── traces/               # Debugging traces
├── ui.spec.ts               # Visual regression tests
├── test-page.html           # Standalone test page
└── README.md                # This file
```

## 🔄 Updating Baseline Screenshots

### When to Update Baselines

Update baselines when:
- ✅ You **intentionally** changed component styling
- ✅ You added new features that affect appearance
- ✅ You fixed visual bugs
- ❌ **DO NOT** update if tests fail unexpectedly (investigate first!)

### How to Update Baselines

#### Update All Baselines

```bash
npm run test:playwright:update
```

This runs all tests and updates all baseline screenshots.

#### Update Specific Browser

```bash
npx playwright test --update-snapshots --project=chromium
```

#### Update Specific Test

```bash
npx playwright test ui.spec.ts --grep "Button Component" --update-snapshots
```

#### Review Before Committing

After updating baselines:

1. **Review the diff** in your git client
2. **Verify changes are intentional**
3. **Check all browsers** have been updated consistently
4. **Commit the updated screenshots**:

```bash
git add tests/playwright/__screenshots__/
git commit -m "chore: update visual regression baselines for button redesign"
```

### Best Practice: Update One Component at a Time

When making visual changes:

```bash
# 1. Make CSS changes to Button component
# 2. Update only Button baselines
npx playwright test --grep "Button" --update-snapshots

# 3. Review changes
git diff tests/playwright/__screenshots__/

# 4. If looks good, commit
git add tests/playwright/__screenshots__/
git commit -m "feat: update button hover state styling"
```

## 🔁 CI/CD Integration

### GitHub Actions Workflow

The [`.github/workflows/playwright.yml`](../../.github/workflows/playwright.yml) workflow:

1. **Triggers on**:
   - Pull requests to main/master/develop
   - Pushes to main/master/develop
   - Manual workflow dispatch

2. **Test Flow**:
   ```
   Install Dependencies → Install Browsers → Start Storybook → Run Tests
   ```

3. **On Failure**:
   - Uploads HTML report as artifact
   - Uploads failed screenshot diffs
   - Uploads traces for debugging

4. **Accessing Artifacts**:
   - Go to Actions tab in GitHub
   - Click on failed workflow run
   - Download artifacts from bottom of page

### Viewing CI Results

When tests fail in CI:

1. **Check the Actions tab** on GitHub
2. **Download artifacts**:
   - `playwright-report`: HTML report with visual diffs
   - `playwright-test-results`: Raw test results
   - `playwright-traces`: Traces for debugging

3. **View locally**:
   ```bash
   # Extract downloaded artifacts
   # Open playwright-report/index.html in browser
   ```

### Manual Baseline Update (CI)

If you need to update baselines in CI (use sparingly):

1. Go to **Actions** tab in GitHub
2. Select **Playwright Visual Regression Tests** workflow
3. Click **Run workflow** button
4. Select **update-baselines** job
5. Workflow will update baselines and commit them

⚠️ **Warning**: Only use this for bulk updates across all tests. For targeted updates, update locally.

## ✅ Best Practices

### Writing Visual Tests

1. **Wait for component to be stable**:
   ```typescript
   await page.waitForSelector('button', { state: 'visible' });
   await page.waitForTimeout(500); // Wait for animations
   ```

2. **Disable animations** in config (already done):
   ```typescript
   animations: 'disabled'
   ```

3. **Use consistent viewport sizes**:
   ```typescript
   await page.setViewportSize({ width: 1280, height: 720 });
   ```

4. **Isolate components**:
   - Test one component state per test
   - Use descriptive test names
   - Capture specific elements, not full pages (unless needed)

5. **Handle dynamic content**:
   ```typescript
   // Mock dates, times, random IDs
   await page.evaluate(() => {
     Date.now = () => 1234567890000;
   });
   ```

### Screenshot Naming

Use descriptive names that indicate:
- Component name
- Variant or state
- Browser (handled automatically)

Examples:
- `button-primary.png`
- `input-error.png`
- `modal-open.png`
- `card-hover.png`

### Test Organization

```typescript
test.describe('Component Name', () => {
  test.describe('Variant/Category', () => {
    test('should match baseline - specific state', async ({ page }) => {
      // Test implementation
    });
  });
});
```

## 🔧 Troubleshooting

### Tests Fail on First Run

**Problem**: Tests fail because no baseline screenshots exist yet.

**Solution**: This is expected! Run:
```bash
npm run test:playwright:update
```

### Tests Fail Only in CI

**Problem**: Screenshots differ between local and CI environments.

**Cause**: Different rendering between local OS and CI (Ubuntu).

**Solutions**:
1. **Generate baselines in CI** (recommended for consistency):
   - Delete local `__screenshots__/` folder
   - Push changes
   - Let CI run and fail
   - Use workflow dispatch to update baselines in CI
   - Pull updated baselines

2. **Or use Docker** to match CI environment locally

### Flaky Tests (Random Failures)

**Causes**:
- Animations not fully disabled
- Fonts not loaded
- Images not loaded
- Dynamic content (times, IDs)

**Solutions**:
```typescript
// Wait for fonts
await page.waitForLoadState('networkidle');

// Wait for images
await page.waitForFunction(() => {
  const images = Array.from(document.querySelectorAll('img'));
  return images.every(img => img.complete);
});

// Disable animations (already in config)
animations: 'disabled'

// Mock dynamic content
await page.evaluate(() => {
  Date.now = () => 1234567890000;
});
```

### Too Many False Positives

**Problem**: Tests fail for minor, acceptable differences.

**Solution**: Adjust thresholds in [playwright.config.ts](../../playwright.config.ts):
```typescript
expect: {
  toHaveScreenshot: {
    maxDiffPixelRatio: 0.3,  // Increase to allow more differences
    threshold: 0.3,          // Less strict pixel comparison
  },
},
```

### Screenshots Look Different Across Browsers

**This is expected!** Browsers render differently:
- Font rendering varies
- Anti-aliasing differs
- Default styles differ

Each browser has separate baselines in `__screenshots__/[browser]/`.

### Debugging Test Failures

1. **Run in UI mode** for visual debugging:
   ```bash
   npm run test:playwright:ui
   ```

2. **Run in debug mode** with DevTools:
   ```bash
   npm run test:playwright:debug
   ```

3. **View the HTML report**:
   ```bash
   npm run test:playwright:report
   ```

4. **Inspect traces**:
   - Download trace from test results
   - Open at https://trace.playwright.dev
   - Step through test execution

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Visual Comparisons Guide](https://playwright.dev/docs/test-snapshots)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [CI/CD Integration](https://playwright.dev/docs/ci)
- [Debugging Guide](https://playwright.dev/docs/debug)

## 🤝 Contributing

When adding new visual tests:

1. Create descriptive test names
2. Update baselines locally
3. Review screenshot diffs before committing
4. Document any special setup requirements
5. Ensure tests pass in all three browsers

---

**Happy Testing! 🎭**
