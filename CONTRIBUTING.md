# Contributing to @vtx-ui/react

Thank you for your interest in contributing to VTX UI! We welcome contributions from the community.

## Development Setup

1. **Fork and clone the repository**

```bash
git clone https://github.com/your-username/vtx-ui-react.git
cd vtx-ui-react
```

2. **Install dependencies**

```bash
npm install
```

3. **Start Storybook for development**

```bash
npm run storybook
```

4. **Run tests**

```bash
npm test
```

## Project Structure

```
vtx-ui-react/
├── src/
│   ├── components/     # Component implementations
│   ├── hooks/          # Custom React hooks
│   └── theme/          # Theme system and tokens
├── stories/            # Storybook stories
├── tests/              # Test files
├── .storybook/         # Storybook configuration
└── dist/               # Build output (generated)
```

## Development Workflow

### Creating a New Component

1. Create a new directory under `src/components/`
2. Create the component file with TypeScript and JSDoc comments
3. Create a CSS file for styles using CSS variables
4. Create an index.ts for exports
5. Add stories in `stories/`
6. Write tests in `tests/components/`
7. Export from `src/index.ts`

### Component Template

```tsx
import React, { forwardRef, HTMLAttributes } from 'react';
import './ComponentName.css';

export interface ComponentNameProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Description of prop
   * @default 'default'
   */
  variant?: 'primary' | 'secondary';
}

/**
 * ComponentName - Brief description
 *
 * @example
 * ```tsx
 * <ComponentName variant="primary">
 *   Content
 * </ComponentName>
 * ```
 */
export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ variant = 'primary', className = '', ...props }, ref) => {
    const classNames = [
      'vtx-component',
      `vtx-component--${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classNames} {...props}>
        {/* Component implementation */}
      </div>
    );
  }
);

ComponentName.displayName = 'ComponentName';
```

### Writing Tests

All components should have:

1. **Rendering tests** - Verify component renders correctly
2. **Interaction tests** - Test user interactions
3. **Accessibility tests** - Use jest-axe for a11y validation

```tsx
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ComponentName } from '../../src/components/ComponentName';

expect.extend(toHaveNoViolations);

describe('ComponentName', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<ComponentName />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Styling Guidelines

- Use CSS variables from the theme system
- Follow BEM-like naming: `vtx-component__element--modifier`
- Support all component variants and sizes
- Include focus styles for keyboard navigation
- Test in both light and dark modes

Example:

```css
.vtx-component {
  font-family: var(--vtx-font-family-sans);
  color: var(--vtx-color-neutral-900);
  padding: var(--vtx-spacing-4);
  border-radius: var(--vtx-radius-md);
  transition: all var(--vtx-transition-base);
}

.vtx-component:focus-visible {
  outline: 2px solid var(--vtx-color-primary-500);
  outline-offset: 2px;
}
```

## Accessibility Requirements

All components must meet WCAG 2.1 AA standards:

- Proper semantic HTML
- ARIA attributes where needed
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Color contrast compliance

## Code Style

We use ESLint and Prettier for code formatting:

```bash
# Check formatting
npm run format:check

# Fix formatting
npm run format

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test:watch

# Run tests with coverage
npm test:coverage
```

Coverage thresholds are set at 80% for:
- Branches
- Functions
- Lines
- Statements

## Building

```bash
npm run build
```

The build outputs:
- ESM modules
- CommonJS modules
- TypeScript declarations
- Compiled CSS

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:
```
feat(button): add loading state with spinner animation
```

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Write/update tests
4. Update documentation if needed
5. Run tests and linting
6. Submit a pull request

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Tests pass locally
- [ ] New components have stories
- [ ] Accessibility tests included
- [ ] Documentation updated
- [ ] No console errors or warnings

## Questions?

Feel free to open an issue for:
- Bug reports
- Feature requests
- Questions about the project

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
