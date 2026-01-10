# Playwright Visual Regression Testing - Setup Complete ✅

## 📦 What's Been Created

Your Playwright visual regression testing setup is now complete and production-ready! Here's what was added:

### 1. Configuration Files

#### [`playwright.config.ts`](../../playwright.config.ts)
Main Playwright configuration with:
- ✅ Multi-browser testing (Chromium, Firefox, WebKit)
- ✅ Screenshot comparison settings
- ✅ Baseline directory configuration
- ✅ CI-optimized settings
- ✅ Detailed comments explaining each setting

### 2. Test Files

#### [`tests/playwright/ui.spec.ts`](./ui.spec.ts)
Comprehensive test suite testing VTX components via Storybook:
- ✅ Button component (all states)
- ✅ Input component (default, filled, error)
- ✅ Modal component (open, overlay)
- ✅ Card component (default, hover)
- ✅ ProductCard widget
- ✅ Alert component (all variants)
- ✅ Responsive design tests
- ✅ Theme variation tests

#### [`tests/playwright/standalone.spec.ts`](./standalone.spec.ts)
Alternative test suite using standalone HTML page:
- ✅ Component section tests
- ✅ Full page screenshots
- ✅ Interactive state tests
- ✅ Responsive breakpoint tests
- ✅ Component interaction tests

#### [`tests/playwright/test-page.html`](./test-page.html)
Standalone HTML page for testing without Storybook:
- ✅ All major VTX components
- ✅ Interactive functionality (modals, hovers)
- ✅ Styled components matching VTX design
- ✅ Can be used independently of Storybook

### 3. CI/CD Integration

#### [`.github/workflows/playwright.yml`](../../.github/workflows/playwright.yml)
GitHub Actions workflow with:
- ✅ Automated testing on PRs and pushes
- ✅ Multi-browser parallel execution
- ✅ Artifact uploads (reports, diffs, traces)
- ✅ Manual baseline update capability
- ✅ Optimized for CI performance

### 4. Documentation

#### [`tests/playwright/README.md`](./README.md)
Comprehensive guide covering:
- ✅ Overview and setup
- ✅ Running tests (all modes)
- ✅ Understanding visual regression
- ✅ Updating baselines
- ✅ CI/CD integration details
- ✅ Best practices
- ✅ Troubleshooting guide

#### [`tests/playwright/QUICK_REFERENCE.md`](./QUICK_REFERENCE.md)
Quick reference card with:
- ✅ Common commands
- ✅ Typical workflows
- ✅ Quick troubleshooting

### 5. Package Scripts

Updated [`package.json`](../../package.json) with:
```json
{
  "scripts": {
    "test:playwright": "playwright test",
    "test:playwright:ui": "playwright test --ui",
    "test:playwright:debug": "playwright test --debug",
    "test:playwright:update": "playwright test --update-snapshots",
    "test:playwright:report": "playwright show-report"
  }
}
```

### 6. Git Configuration

Updated [`.gitignore`](../../.gitignore) to exclude:
- ✅ Test results directory
- ✅ Playwright reports
- ✅ Authentication files
- ⚠️ Baseline screenshots ARE committed (intentional)

---

## 🚀 Getting Started

### First-Time Setup

1. **Install Playwright browsers** (one-time):
   ```bash
   npx playwright install
   ```

2. **Start Storybook** (in a separate terminal):
   ```bash
   npm run storybook
   ```

3. **Generate baseline screenshots**:
   ```bash
   npm run test:playwright:update
   ```

4. **Run tests** to verify:
   ```bash
   npm run test:playwright
   ```

### Daily Usage

```bash
# Run all visual tests
npm run test:playwright

# Run in interactive UI mode (recommended for development)
npm run test:playwright:ui

# View test report after run
npm run test:playwright:report
```

---

## 📸 How Visual Regression Works

1. **First Run**: Captures baseline screenshots
   - Stored in `tests/playwright/__screenshots__/[browser]/`
   - These files are committed to git

2. **Subsequent Runs**: Compares current vs baseline
   - **Pass**: Differences within threshold
   - **Fail**: Differences exceed threshold

3. **On Failure**: Generates artifacts
   - `actual/`: Current screenshot
   - `expected/`: Baseline screenshot
   - `diff/`: Visual differences highlighted in red

---

## 🔄 Common Workflows

### Making CSS Changes

```bash
# 1. Edit your component styles

# 2. Update baselines for that component
npx playwright test --grep "ComponentName" --update-snapshots

# 3. Review the changes
git diff tests/playwright/__screenshots__/

# 4. If correct, commit
git add tests/playwright/__screenshots__/
git commit -m "chore: update baselines for button styling"
```

### Debugging Failed Tests

```bash
# Option 1: UI mode (visual, interactive)
npm run test:playwright:ui

# Option 2: View HTML report
npm run test:playwright:report

# Option 3: Debug mode with DevTools
npm run test:playwright:debug
```

### Running Specific Tests

```bash
# Run one test file
npx playwright test ui.spec.ts

# Run tests matching a pattern
npx playwright test --grep "Button"

# Run only Chromium tests
npx playwright test --project=chromium
```

---

## 🤖 CI/CD Integration

Tests automatically run on:
- ✅ Pull requests to main/master/develop
- ✅ Pushes to main/master/develop
- ✅ Manual workflow dispatch

### Viewing CI Results

1. Go to **Actions** tab in GitHub
2. Click on the workflow run
3. Download artifacts if tests failed:
   - `playwright-report`: Visual diffs and reports
   - `playwright-test-results`: Raw results
   - `playwright-traces`: Execution traces

### Updating Baselines in CI

For bulk baseline updates:

1. Go to **Actions** tab
2. Click **Run workflow** → Select **update-baselines**
3. Workflow will update and commit baselines automatically

---

## 📚 File Structure

```
project/
├── playwright.config.ts              # Main configuration
├── .github/
│   └── workflows/
│       └── playwright.yml            # CI/CD workflow
├── package.json                      # Added test scripts
├── tests/
│   └── playwright/
│       ├── README.md                 # Full documentation
│       ├── QUICK_REFERENCE.md        # Quick reference
│       ├── ui.spec.ts                # Storybook tests
│       ├── standalone.spec.ts        # Standalone page tests
│       ├── test-page.html            # Standalone test page
│       ├── __screenshots__/          # ✅ COMMIT - Baselines
│       │   ├── chromium/
│       │   ├── firefox/
│       │   └── webkit/
│       └── test-results/             # ❌ IGNORE - Artifacts
```

---

## ⚙️ Configuration Highlights

### Screenshot Comparison Settings

```typescript
expect: {
  toHaveScreenshot: {
    maxDiffPixelRatio: 0.2,  // Max 20% of pixels can differ
    maxDiffPixels: 100,      // Or max 100 pixels total
    threshold: 0.2,          // Pixel difference sensitivity
    animations: 'disabled',  // Prevent animation flakiness
  },
}
```

### Browser Coverage

- ✅ **Chromium** (Chrome, Edge, Brave)
- ✅ **Firefox**
- ✅ **WebKit** (Safari)

Each browser has separate baseline screenshots.

---

## 🎯 Test Coverage

### Current Test Coverage

#### Components (Storybook)
- ✅ Button (primary, secondary, hover, disabled)
- ✅ Input (default, filled, error)
- ✅ Modal (open, overlay)
- ✅ Card (default, hover)
- ✅ ProductCard widget
- ✅ Alert (success, warning, error, info)

#### Responsive Design
- ✅ Mobile viewport (375x667)
- ✅ Tablet viewport (768x1024)
- ✅ Desktop viewport (1280x720)

#### Themes
- ✅ Dark theme support (if available)

### Adding More Tests

To test additional components:

1. **Add to Storybook** (if not already there)
2. **Create test** in `ui.spec.ts`:
   ```typescript
   test('should match baseline - new component', async ({ page }) => {
     await page.goto('/iframe.html?id=components-newcomponent--default&viewMode=story');
     await page.waitForSelector('.component-selector');
     const component = page.locator('.component-selector');
     await expect(component).toHaveScreenshot('new-component.png');
   });
   ```
3. **Generate baseline**:
   ```bash
   npx playwright test --grep "new component" --update-snapshots
   ```
4. **Commit baselines**

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Tests fail on first run | Expected! Run `npm run test:playwright:update` |
| Storybook not found | Start Storybook: `npm run storybook` |
| Flaky tests | Check animations disabled, fonts loaded |
| CI-only failures | Generate baselines in CI environment |
| Too many failures | Increase thresholds in `playwright.config.ts` |

---

## ✅ Best Practices

1. **Update baselines intentionally**
   - Review diffs before committing
   - Update one component at a time
   - Document why baselines changed

2. **Keep tests stable**
   - Disable animations
   - Wait for fonts/images to load
   - Use consistent viewport sizes
   - Mock dynamic content (dates, IDs)

3. **Name screenshots descriptively**
   - Use: `button-primary-hover.png`
   - Not: `screenshot-1.png`

4. **Test in UI mode during development**
   - Faster feedback loop
   - Visual debugging
   - Side-by-side comparisons

5. **Review CI artifacts**
   - Download reports on failures
   - Check diffs before merging PRs
   - Investigate unexpected changes

---

## 🎓 Learning Resources

- **Full Documentation**: [`tests/playwright/README.md`](./README.md)
- **Quick Reference**: [`tests/playwright/QUICK_REFERENCE.md`](./QUICK_REFERENCE.md)
- **Playwright Docs**: https://playwright.dev/
- **Visual Testing Guide**: https://playwright.dev/docs/test-snapshots

---

## 🎉 You're Ready!

Your Playwright visual regression testing setup is complete and production-ready. Here's what to do next:

1. ✅ **Generate baselines**: `npm run test:playwright:update`
2. ✅ **Commit baselines**: `git add tests/playwright/__screenshots__/`
3. ✅ **Run tests**: `npm run test:playwright`
4. ✅ **Push changes**: Tests will run automatically in CI

**Happy testing! 🎭**

---

**Need Help?**
- Read the [full README](./README.md)
- Check the [quick reference](./QUICK_REFERENCE.md)
- Visit [Playwright documentation](https://playwright.dev/)
