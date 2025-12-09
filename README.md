<p align="center">
  <img src="https://innostes.com/images/home/section_navbar/company-latest-logo.png" alt="Innostes Solutions Pvt Ltd" width="220"/>
</p>

# @vtx-ui/react

A production-ready React + TypeScript UI library with enterprise-grade components.

<p align="center">
  <b>Documentation & full guides at <a href="https://vertexui.com/" target="_blank">vertexui.com</a></b><br/>
  <sub>Developed and maintained by <a href="https://innostes.com/" target="_blank">Innostes Solutions Pvt Ltd</a> for the <a href="https://github.com/vertex-ui" target="_blank">vertex-ui</a> organization.</sub>
</p>

[![npm version](https://badge.fury.io/js/%40vtx-ui%2Freact.svg)](https://www.npmjs.com/package/@vtx-ui/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

✨ **Enterprise-Ready** - Production-grade components with strict TypeScript support  
♿ **Accessible** - WCAG 2.1 AA compliant with full ARIA support  
🎨 **Unified Theme System** - Consistent primary color-based design across all 23 components  
🎯 **Fully Customizable** - Change entire theme with CSS custom properties (no rebuild needed)  
📦 **Tree-Shakable** - Optimized bundle size with ESM support  
🧪 **Well Tested** - 508 passing tests with 100% component coverage  
📚 **Documented** - Complete JSDoc comments, Storybook, and theming guides

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

## Theming

All components use a **unified primary color system** for consistent branding:

```css
/* Change the entire theme by updating primary color tokens */
:root {
  --vtx-color-primary-500: #3b82f6; /* Focus rings, borders */
  --vtx-color-primary-600: #2563eb; /* Main brand color */
  --vtx-color-primary-700: #1d4ed8; /* Hover states */
}
```

**Examples:**

- **Blue (default)**: Modern, tech-focused
- **Green**: Eco-friendly, growth-oriented
- **Purple**: Premium, creative brand
- **Red**: Bold, action-driven

📖 **[Complete Theming Guide](./DESIGN_SYSTEM_THEMING.md)** - Learn how to customize colors, spacing, typography, and more.

## Components

### 23 Production-Ready Components

**Form Controls**: Button, Input, Select, MultiSelect, Checkbox, Radio, CheckboxGroup, RadioGroup  
**Interactive**: Accordion, Card, Modal, Toast, Tooltip  
**Display**: Chip, Badge, Alert, Table, Avatar, Divider, Text  
**Layout**: Flex, Grid

### Example Usage

#### Button

```tsx
import { Button } from '@vtx-ui/react';

<Button variant="primary" size="large" loading={false}>
  Click me
</Button>;
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
/>;
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
</Modal>;
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

  return <div style={{ color: tokens.colors.primary[500] }}>Current mode: {mode}</div>;
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

MIT © [Innostes Solutions Pvt Ltd](https://innostes.com/)

## Links

- [Documentation](https://vertexui.com/)
- [Storybook](https://vertexui.com/storybook)
- [npm](https://www.npmjs.com/package/@vtx-ui/react)
- [GitHub](https://github.com/vertex-ui/react)
