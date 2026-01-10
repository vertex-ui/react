# Playwright Visual Regression - Quick Reference

## 🚀 Quick Start

```bash
# 1. Install Playwright browsers (one-time setup)
npx playwright install

# 2. Start Storybook (in separate terminal)
npm run storybook

# 3. Run tests to generate baseline screenshots (first time)
npm run test:playwright:update

# 4. Run tests normally (subsequent runs)
npm run test:playwright
```

## 📝 Common Commands

| Command | Description |
|---------|-------------|
| `npm run test:playwright` | Run all visual regression tests |
| `npm run test:playwright:ui` | Run tests in interactive UI mode |
| `npm run test:playwright:debug` | Run tests with debugging enabled |
| `npm run test:playwright:update` | Update all baseline screenshots |
| `npm run test:playwright:report` | View HTML test report |

## 🎯 Common Workflows

### Making CSS Changes

```bash
# 1. Make your CSS changes
# 2. Update affected baselines
npx playwright test --grep "ComponentName" --update-snapshots

# 3. Review changes
git diff tests/playwright/__screenshots__/

# 4. Commit if correct
git add tests/playwright/__screenshots__/
git commit -m "chore: update baselines for component styling"
```

### Running Specific Tests

```bash
# Run single test file
npx playwright test ui.spec.ts

# Run tests matching pattern
npx playwright test --grep "Button"

# Run specific browser only
npx playwright test --project=chromium
```

### Debugging Failed Tests

```bash
# 1. Run in UI mode to see visual diffs
npm run test:playwright:ui

# 2. Or view the HTML report
npm run test:playwright:report

# 3. Check test-results/ folder for diffs
```

## 📸 Screenshot Locations

```
tests/playwright/
├── __screenshots__/              ✅ COMMIT - Baseline screenshots
│   ├── chromium/
│   ├── firefox/
│   └── webkit/
└── test-results/                 ❌ IGNORE - Test artifacts
    ├── actual/                   Current screenshots
    ├── expected/                 Baseline copies
    └── diff/                     Visual differences
```

## ⚙️ Configuration

Main config: [`playwright.config.ts`](../../playwright.config.ts)

Key settings:
- **maxDiffPixelRatio**: `0.2` (20% pixels can differ)
- **threshold**: `0.2` (pixel difference sensitivity)
- **animations**: `disabled` (prevent flaky tests)

## 🔄 CI/CD

Tests run automatically on:
- Pull requests to main/master/develop
- Pushes to main/master/develop

**View Results**: Actions tab → Download artifacts

**Update Baselines in CI**:
1. Go to Actions tab
2. Run workflow manually
3. Select "update-baselines" job

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Tests fail on first run | Expected! Run `npm run test:playwright:update` |
| Flaky tests | Check animations disabled, fonts loaded |
| CI failures only | Generate baselines in CI environment |
| Too many false positives | Increase thresholds in config |

## 📚 Documentation

Full docs: [`tests/playwright/README.md`](./README.md)

Official docs: https://playwright.dev/docs/test-snapshots

---

**Need help?** Check the full [README](./README.md) or [Playwright docs](https://playwright.dev/)
