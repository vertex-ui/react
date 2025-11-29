# @vtx-ui/react

A production-ready React + TypeScript UI library with enterprise-grade components.

[![npm version](https://badge.fury.io/js/%40vtx-ui%2Freact.svg)](https://www.npmjs.com/package/@vtx-ui/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

✨ **Enterprise-Ready** - Production-grade components with strict TypeScript support  
♿ **Accessible** - WCAG 2.1 AA compliant with full ARIA support  
🎨 **Themeable** - Comprehensive design token system with CSS variables  
📦 **Tree-Shakable** - Optimized bundle size with ESM support  
🧪 **Well Tested** - Unit tests, accessibility tests, and Storybook coverage  
📚 **Documented** - Complete JSDoc comments and interactive Storybook

## Installation

```bash
npm install @vtx-ui/react
```

```bash
yarn add @vtx-ui/react
```

```bash
pnpm add @vtx-ui/react
```

## Quick Start

```tsx
import { ThemeProvider, Button } from '@vtx-ui/react';
import '@vtx-ui/react/styles.css';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary" onClick={() => console.log('clicked')}>
        Click me
      </Button>
    </ThemeProvider>
  );
}
```

## Components

### Core Components

- **Button** - Interactive buttons with multiple variants and loading states
- **Input** - Text input fields with labels, validation, and icons
- **Select** - Dropdown selection with customizable options
- **Table** - Data tables with sorting, striping, and custom cell rendering
- **Modal** - Accessible dialogs with focus management
- **Tooltip** - Contextual information on hover
- **Avatar** - User profile images with fallback support
- **Badge** - Status indicators and labels

### Example Usage

#### Button

```tsx
import { Button } from '@vtx-ui/react';

<Button variant="primary" size="large" loading={false}>
  Click me
</Button>
```

#### Input

```tsx
import { Input } from '@vtx-ui/react';

<Input
  label="Email"
  type="email"
  placeholder="you@example.com"
  helperText="We'll never share your email"
  error={errors.email}
/>
```

#### Modal

```tsx
import { Modal, Button } from '@vtx-ui/react';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  footer={
    <>
      <Button onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </>
  }
>
  <p>Are you sure you want to proceed?</p>
</Modal>
```

## Theming

The library uses a comprehensive design token system with CSS variables:

```tsx
import { ThemeProvider, tokens } from '@vtx-ui/react';

function App() {
  return (
    <ThemeProvider initialMode="light">
      <YourApp />
    </ThemeProvider>
  );
}
```

### Using Theme Tokens

```tsx
import { useTheme } from '@vtx-ui/react';

function MyComponent() {
  const { tokens, mode, setMode } = useTheme();

  return (
    <div style={{ color: tokens.colors.primary[500] }}>
      Current mode: {mode}
    </div>
  );
}
```

## Custom Hooks

- `useTheme` - Access theme tokens and mode
- `useClickOutside` - Detect clicks outside an element
- `useFocusTrap` - Trap focus within a component
- `useEscapeKey` - Handle escape key presses
- `useBodyScrollLock` - Lock body scroll (for modals)
- `useId` - Generate unique IDs for accessibility
- `useDebounce` - Debounce values

## Development

### Install dependencies

```bash
npm install
```

### Start Storybook

```bash
npm run storybook
```

### Run tests

```bash
npm test
```

### Build library

```bash
npm run build
```

### Lint and format

```bash
npm run lint
npm run format
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

MIT © [Your Name]

## Links

- [Documentation](https://your-docs-url.com)
- [Storybook](https://your-storybook-url.com)
- [npm](https://www.npmjs.com/package/@vtx-ui/react)
- [GitHub](https://github.com/your-username/vtx-ui-react)
