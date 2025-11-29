# Quick Setup Guide

## Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required dependencies including:
- React 18
- TypeScript 5
- Vite
- Storybook
- Jest & Testing Library
- ESLint & Prettier

## Step 2: Verify Installation

After installation completes, verify everything is set up correctly:

```bash
npm run lint
```

This should complete without errors.

## Step 3: Start Development

### Option A: Storybook (Recommended for component development)

```bash
npm run storybook
```

This will:
- Start Storybook on http://localhost:6006
- Open your browser automatically
- Show all components with interactive controls

### Option B: Vite Dev Server

```bash
npm run dev
```

This starts a development server for testing the library locally.

## Step 4: Run Tests

```bash
npm test
```

This runs all tests including:
- Component rendering tests
- Interaction tests
- Accessibility tests with axe-core

## Step 5: Build the Library

```bash
npm run build
```

This creates the production build in the `dist/` folder with:
- ESM modules (index.js)
- CommonJS modules (index.cjs)
- TypeScript declarations (index.d.ts)
- Compiled CSS (style.css)

## Common Issues

### Issue: Module not found errors

**Solution**: Make sure you've run `npm install` completely

### Issue: TypeScript errors

**Solution**: Check that TypeScript version is 5.3.3 or higher:
```bash
npx tsc --version
```

### Issue: Storybook won't start

**Solution**: Clear the cache and try again:
```bash
npm run storybook -- --no-manager-cache
```

### Issue: Tests fail

**Solution**: Make sure jest-environment-jsdom is installed:
```bash
npm install -D jest-environment-jsdom
```

## Publishing to npm

When you're ready to publish:

1. Update version in package.json
2. Build the library: `npm run build`
3. Test the build: `npm pack` (creates a tarball)
4. Publish: `npm publish --access public`

## Next Steps

1. ✅ Explore components in Storybook
2. ✅ Review component source code in `src/components/`
3. ✅ Check test files in `tests/`
4. ✅ Read CONTRIBUTING.md for development guidelines
5. ✅ Customize theme tokens in `src/theme/tokens.ts`

## Useful Commands

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start component explorer |
| `npm test` | Run all tests |
| `npm run build` | Build for production |
| `npm run lint:fix` | Fix linting issues |
| `npm run format` | Format code |

## Getting Help

- Check PROJECT_SUMMARY.md for complete overview
- Read CONTRIBUTING.md for development workflow
- Review component stories in `stories/` folder
- Examine test examples in `tests/` folder

Happy coding! 🚀
