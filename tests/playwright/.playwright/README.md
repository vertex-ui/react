# Playwright Installation Verification

This directory is created when you install Playwright browsers.

## Installation Status

If this file exists, check your installation status:

```bash
npx playwright --version
```

## Install or Update Browsers

```bash
# Install all browsers
npx playwright install

# Install with system dependencies (Linux/CI)
npx playwright install --with-deps

# Install specific browser
npx playwright install chromium
npx playwright install firefox
npx playwright install webkit
```

## Verify Installation

```bash
# List installed browsers
npx playwright install --dry-run
```

## Browser Storage Location

Playwright browsers are stored in:
- **Windows**: `%USERPROFILE%\AppData\Local\ms-playwright`
- **macOS**: `~/Library/Caches/ms-playwright`
- **Linux**: `~/.cache/ms-playwright`

## More Info

See: https://playwright.dev/docs/browsers
