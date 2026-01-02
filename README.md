<p align="center">
  <img src="https://innostes.com/images/home/section_navbar/company-latest-logo.png" alt="Innostes Solutions Pvt Ltd" width="220"/>
</p>

<h1 align="center">@vui/react</h1>

<p align="center">
  <strong>Enterprise-Grade React UI Library</strong><br/>
  Production-ready components and widgets for modern web applications
</p>

<p align="center">
  <b>Documentation & full guides at <a href="https://vertexui.com/" target="_blank">vertexui.com</a></b><br/>
  <sub>Developed and maintained by <a href="https://innostes.com/" target="_blank">Innostes Solutions Pvt Ltd</a> for the <a href="https://github.com/vertex-ui" target="_blank">vertex-ui</a> organization.</sub>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@vui/react"><img src="https://badge.fury.io/js/%40vui%2Freact.svg" alt="npm version" /></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" /></a>
  <img src="https://img.shields.io/badge/TypeScript-100%25-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tests-508%20Passing-success" alt="Tests" />
  <img src="https://img.shields.io/badge/Coverage-100%25-brightgreen" alt="Coverage" />
</p>

---

## Table of Contents

- [Overview](#overview)
- [Why Choose @vui/react](#why-choose-vuireact)
- [Key Features](#key-features)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Components Library](#components-library)
- [Widgets Library](#widgets-library)
- [Theming System](#theming-system)
- [Custom Hooks](#custom-hooks)
- [TypeScript Support](#typescript-support)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Development](#development)
- [Browser Support](#browser-support)
- [Enterprise Support](#enterprise-support)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

**@vui/react** is a comprehensive UI component library built with React and TypeScript, designed for enterprise applications that demand reliability, accessibility, and seamless customization. With **35+ production-ready components** and **10+ specialized widgets**, our library provides everything you need to build modern, scalable web applications.

## Why Choose @vui/react?

### Built for Enterprise

- **Production-Tested** - Battle-tested in real-world enterprise applications
- **Type-Safe** - 100% TypeScript with comprehensive type definitions
- **Scalable Architecture** - Designed to grow with your application
- **Consistent Design Language** - Unified theme system across all components
- **Professional Support** - Backed by Innostes Solutions with enterprise support options

### Developer Experience

- **Zero Configuration** - Works out of the box with sensible defaults
- **Extensive Documentation** - Comprehensive guides, API docs, and live examples
- **Storybook Integration** - Interactive component playground
- **Modern Tooling** - Built with the latest React patterns and best practices
- **Active Maintenance** - Regular updates, bug fixes, and new features

### Performance First

- **Tree-Shakable** - Only bundle what you use
- **Optimized Bundle Size** - Efficient code splitting and lazy loading
- **CSS Custom Properties** - Dynamic theming without JavaScript overhead
- **Minimal Dependencies** - Carefully selected, high-quality dependencies

## Key Features

### 🏢 Enterprise-Ready
Production-grade components with strict TypeScript support, comprehensive testing, and battle-tested reliability across large-scale applications.

### ♿ Accessibility First
WCAG 2.1 AA compliant with full ARIA support. Every component is built with keyboard navigation, screen reader support, and focus management.

### 🎨 Unified Theme System
Consistent design language powered by CSS custom properties. Change your entire brand identity by updating a few color tokens—no rebuild required.

### 🎯 Fully Customizable
Customize colors, spacing, typography, and component styles using CSS variables. Override individual components or create completely custom themes.

### 📦 Tree-Shakable
Optimized ESM and CJS builds ensure you only bundle what you use. Automatic dead-code elimination keeps your bundle lean.

### 🧪 Thoroughly Tested
508 passing tests with 100% component coverage. Tested across multiple browsers and screen readers for maximum reliability.

### 📚 Comprehensive Documentation
Complete JSDoc comments, interactive Storybook examples, detailed theming guides, and migration documentation.

### 🚀 Modern Stack
Built with React 17+, TypeScript, and modern CSS. Supports React Server Components and Next.js 13+ app directory.

### 🔧 Developer Tools
Custom hooks, HOCs, and utilities to accelerate development. Theme debugging tools and design token documentation included.

## Installation

### npm
```bash
npm install @vui/react
```

### yarn
```bash
yarn add @vui/react
```

### pnpm
```bash
pnpm add @vui/react
```

### Requirements

- React ≥17.0.0
- React DOM ≥17.0.0
- Node.js ≥14.0.0

## Quick Start

### 1. Import Styles

Import the base stylesheet in your application entry point:

```tsx
import '@vui/react/styles.css';
```

### 2. Wrap with ThemeProvider

Wrap your application with the `ThemeProvider` to enable theming:

```tsx
import { ThemeProvider, Button } from '@vui/react';

function App() {
  return (
    <ThemeProvider initialMode="light">
      <Button variant="primary" onClick={() => console.log('clicked')}>
        Click me
      </Button>
    </ThemeProvider>
  );
}

export default App;
```

### 3. Start Building

Import and use any component:

```tsx
import { Button, Input, Card, Modal } from '@vui/react';

function MyComponent() {
  return (
    <Card>
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

---

## Components Library

Our comprehensive component library includes **35+ production-ready components** organized into logical categories:

### 📝 Form Controls (13 components)

Build powerful forms with our complete set of form controls:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **Button** | Action buttons with multiple variants | Primary, secondary, ghost, loading states |
| **Input** | Text input with validation | Error states, helper text, icons, masking |
| **Textarea** | Multi-line text input | Auto-resize, character count, validation |
| **Select** | Dropdown selection | Searchable, grouped options, custom rendering |
| **MultiSelect** | Multiple selection dropdown | Tag management, search, custom item rendering |
| **Checkbox** | Single checkbox input | Indeterminate state, custom labels |
| **CheckboxGroup** | Multiple checkbox group | Validation, select all, custom layout |
| **Radio** | Single radio input | Custom styles, disabled states |
| **RadioGroup** | Radio button group | Horizontal/vertical layout, validation |
| **DatePicker** | Date selection | Range selection, min/max dates, custom formats |
| **DateRangePicker** | Date range selector | Presets, custom ranges, timezone support |
| **Autocomplete** | Auto-complete text input | Async search, custom rendering, keyboard nav |
| **FormControl** | Form field wrapper | Consistent spacing, labels, error handling |

### 🎯 Interactive Components (8 components)

Engage users with rich interactive elements:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **Accordion** | Collapsible content panels | Single/multiple expand, animations, icons |
| **Card** | Content container | Elevations, actions, media support |
| **Modal** | Dialog overlay | Focus trap, animations, custom footers |
| **Toast** | Notification messages | Auto-dismiss, positions, variants, stacking |
| **Tooltip** | Contextual information | Multiple positions, delays, interactive |
| **Menu** | Dropdown menu | Nested menus, keyboard nav, icons |
| **ActionMenu** | Context menu actions | Quick actions, separators, disabled items |
| **SideMenu** | Navigation sidebar | Collapsible, nested items, active states |

### 📊 Data Display (10 components)

Present information clearly and effectively:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **Table** | Data table | Sorting, pagination, row selection, sticky headers |
| **DataGrid** | Advanced data grid | Virtual scrolling, filtering, export, inline editing |
| **Timeline** | Event timeline | Vertical/horizontal, custom icons, interactive |
| **Chip** | Compact label/tag | Removable, clickable, icons, avatars |
| **Badge** | Status indicator | Colors, positions, dot variant, counts |
| **Alert** | Important messages | Variants, dismissible, icons, actions |
| **Avatar** | User profile image | Fallback initials, sizes, groups, status indicators |
| **Divider** | Visual separator | Horizontal/vertical, with text, custom spacing |
| **Text** | Typography component | Semantic variants, truncation, colors, weights |
| **Image** | Optimized image | Lazy loading, placeholder, error handling |

### 📐 Layout Components (6 components)

Structure your application with flexible layout primitives:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **Flex** | Flexbox layout | Gap, alignment, wrapping, responsive props |
| **Grid** | CSS Grid layout | Columns, gaps, responsive, auto-fit |
| **Container** | Content container | Max-width, padding, centering, breakpoints |
| **Header** | Page header | Sticky, actions, breadcrumbs, navigation |
| **AdminHeader** | Admin panel header | User menu, notifications, search, branding |
| **Breadcrumb** | Navigation breadcrumbs | Custom separators, links, current page |

### 🎨 Specialized Components (3 components)

Advanced components for specific use cases:

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **RichTextEditor** | WYSIWYG editor | Formatting, lists, links, images, markdown |
| **Link** | Enhanced anchor | External indicator, variants, underline styles |
| **Widget** | Dashboard widget | Header, footer, loading states, refresh |

---

## Widgets Library

Pre-built, domain-specific widgets for rapid application development. **10 specialized widgets** ready to use:

### 🛍️ E-Commerce Widgets (4 widgets)

| Widget | Description | Use Case |
|--------|-------------|----------|
| **ProductCard** | Product display card | Product listings, catalogs, featured items |
| **OrderCard** | Order summary card | Order history, checkout summary |
| **OrderConfirmation** | Order success view | Post-purchase confirmation page |
| **OrderDetails** | Detailed order view | Order management, customer support |

### 📈 Analytics & Metrics (3 widgets)

| Widget | Description | Use Case |
|--------|-------------|----------|
| **MetricCard** | KPI display card | Dashboards, analytics, reporting |
| **InfoCard** | Information display | Feature highlights, statistics |
| **InfoListCard** | List-based info card | Multi-item information display |

### 🧭 Navigation Widgets (3 widgets)

| Widget | Description | Use Case |
|--------|-------------|----------|
| **Navbar** | Navigation bar | Site navigation, responsive menu |
| **Header** | Page header widget | Consistent page headers |
| **InfoText** | Informational text block | Help text, descriptions, onboarding |

### Widget Benefits

- **Plug-and-Play** - Drop into your application with minimal configuration
- **Customizable** - Full theming support and prop-based customization
- **Consistent UX** - Built with the same design system as base components
- **Production-Ready** - Field-tested in real applications
- **Time-Saving** - Accelerate development with pre-built patterns

### Using Widgets

```tsx
import { ProductCard, MetricCard, Navbar } from '@vui/react';

function Dashboard() {
  return (
    <>
      <Navbar items={navItems} logo={<Logo />} />
      
      <MetricCard
        title="Revenue"
        value="$45,231"
        change={12.5}
        trend="up"
        icon={<DollarIcon />}
      />
      
      <ProductCard
        name="Premium Widget"
        price={99.99}
        image="/product.jpg"
        rating={4.5}
        onAddToCart={handleAddToCart}
      />
    </>
  );
}
```

---

## Theming System

@vui/react features a powerful, flexible theming system built on CSS custom properties, enabling dynamic theme changes without rebuilding your application.

### Unified Primary Color System

All components use a **consistent primary color palette** for branding:

```css
:root {
  --vtx-color-primary-500: #3b82f6; /* Focus rings, borders */
  --vtx-color-primary-600: #2563eb; /* Main brand color */
  --vtx-color-primary-700: #1d4ed8; /* Hover states */
}
```

### Theme Modes

Built-in light and dark mode support:

```tsx
import { ThemeProvider, useTheme } from '@vui/react';

function App() {
  return (
    <ThemeProvider initialMode="dark">
      <YourApp />
    </ThemeProvider>
  );
}

function ThemeToggle() {
  const { mode, setMode } = useTheme();
  
  return (
    <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}
```

### Custom Theme Colors

Create your brand identity by customizing color tokens:

```css
/* Blue Theme (Default) - Modern, tech-focused */
:root {
  --vtx-color-primary-500: #3b82f6;
  --vtx-color-primary-600: #2563eb;
  --vtx-color-primary-700: #1d4ed8;
}

/* Green Theme - Eco-friendly, growth-oriented */
:root {
  --vtx-color-primary-500: #10b981;
  --vtx-color-primary-600: #059669;
  --vtx-color-primary-700: #047857;
}

/* Purple Theme - Premium, creative */
:root {
  --vtx-color-primary-500: #8b5cf6;
  --vtx-color-primary-600: #7c3aed;
  --vtx-color-primary-700: #6d28d9;
}

/* Red Theme - Bold, action-driven */
:root {
  --vtx-color-primary-500: #ef4444;
  --vtx-color-primary-600: #dc2626;
  --vtx-color-primary-700: #b91c1c;
}
```

### Advanced Customization

Customize spacing, typography, border radius, and more:

```css
:root {
  /* Spacing Scale */
  --vtx-spacing-xs: 0.25rem;
  --vtx-spacing-sm: 0.5rem;
  --vtx-spacing-md: 1rem;
  --vtx-spacing-lg: 1.5rem;
  --vtx-spacing-xl: 2rem;
  
  /* Typography */
  --vtx-font-family-base: 'Inter', system-ui, sans-serif;
  --vtx-font-size-sm: 0.875rem;
  --vtx-font-size-base: 1rem;
  --vtx-font-size-lg: 1.125rem;
  
  /* Border Radius */
  --vtx-radius-sm: 0.25rem;
  --vtx-radius-md: 0.375rem;
  --vtx-radius-lg: 0.5rem;
  
  /* Shadows */
  --vtx-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --vtx-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --vtx-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```

### Using Theme Tokens in JavaScript

```tsx
import { useTheme } from '@vui/react';

function MyComponent() {
  const { tokens, mode } = useTheme();
  
  return (
    <div style={{
      color: tokens.colors.primary[600],
      padding: tokens.spacing.md,
      borderRadius: tokens.borderRadius.md,
    }}>
      Current mode: {mode}
    </div>
  );
}
```

### Component-Specific Theming

Override styles for specific components:

```css
/* Custom Button styles */
.vtx-button--primary {
  --button-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --button-padding: 0.75rem 2rem;
  font-weight: 600;
}

/* Custom Card styles */
.vtx-card {
  --card-bg: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}
```

📖 **[Complete Theming Guide](./src/theme/README.md)** - Comprehensive documentation on theming, design tokens, and customization strategies.

## Custom Hooks

Accelerate development with our collection of production-ready React hooks:

### Theme & Styling

- **`useTheme()`** - Access theme tokens, mode (light/dark), and setMode function
  ```tsx
  const { tokens, mode, setMode } = useTheme();
  ```

### Interaction Hooks

- **`useClickOutside(ref, handler)`** - Detect clicks outside an element (perfect for dropdowns)
- **`useFocusTrap(ref)`** - Trap focus within a component (essential for modals)
- **`useEscapeKey(handler)`** - Handle escape key presses for dismissible components
- **`useBodyScrollLock(isLocked)`** - Lock/unlock body scroll (prevents background scrolling)

### Utility Hooks

- **`useId(prefix?)`** - Generate unique IDs for accessibility (ARIA labels, form associations)
- **`useDebounce(value, delay)`** - Debounce rapidly changing values (search inputs, API calls)
- **`useMediaQuery(query)`** - Responsive behavior based on media queries
- **`useLocalStorage(key, initialValue)`** - Persist state in localStorage
- **`useToggle(initialValue?)`** - Boolean toggle state management

### Example Usage

```tsx
import { 
  useClickOutside, 
  useFocusTrap, 
  useDebounce,
  useTheme 
} from '@vui/react';

function SearchDropdown() {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 300);
  
  useClickOutside(dropdownRef, () => setIsOpen(false));
  useFocusTrap(dropdownRef);
  
  return (
    <div ref={dropdownRef}>
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      {isOpen && <SearchResults query={debouncedSearch} />}
    </div>
  );
}
```

---

## TypeScript Support

### 100% Type-Safe

Every component, hook, and utility is fully typed with comprehensive TypeScript definitions:

```tsx
import { ButtonProps, InputProps, ModalProps } from '@vui/react';

// Full IntelliSense support
const buttonProps: ButtonProps = {
  variant: 'primary', // Type-checked variants
  size: 'large',      // Type-checked sizes
  onClick: (e) => {}, // Proper event types
};

// Generic type support
interface User {
  id: string;
  name: string;
}

<Select<User>
  options={users}
  getOptionLabel={(user) => user.name}
  getOptionValue={(user) => user.id}
/>
```

### Type Exports

All types are exported for use in your application:

```tsx
import type {
  // Component Props
  ButtonProps,
  InputProps,
  SelectProps,
  ModalProps,
  
  // Common Types
  Size,
  Variant,
  ColorScheme,
  
  // Theme Types
  ThemeMode,
  ThemeTokens,
  
  // Utility Types
  ComponentWithChildren,
  HTMLDivProps,
} from '@vui/react';
```

---

## Accessibility

### WCAG 2.1 AA Compliant

Every component meets WCAG 2.1 Level AA standards:

#### ✅ Keyboard Navigation
- All interactive elements are keyboard accessible
- Logical tab order and focus management
- Skip links and focus traps where appropriate

#### ✅ Screen Reader Support
- Semantic HTML elements
- ARIA labels, descriptions, and live regions
- Proper heading hierarchy

#### ✅ Focus Management
- Visible focus indicators (customizable)
- Focus trap in modals and dialogs
- Restore focus on component unmount

#### ✅ Color Contrast
- 4.5:1 contrast ratio for normal text
- 3:1 contrast ratio for large text and UI components
- Supports Windows High Contrast mode

#### ✅ Responsive & Scalable
- Supports text scaling up to 200%
- Touch targets meet minimum size requirements (44×44px)
- Responsive design for all screen sizes

### Accessibility Features

```tsx
// Built-in ARIA support
<Button aria-label="Close dialog" aria-pressed={isActive}>
  ×
</Button>

// Automatic ID generation for form associations
<Input
  label="Email" // Automatically associates label with input
  helperText="We'll never share your email"
  error="Invalid email format"
/>

// Focus management
<Modal
  isOpen={isOpen}
  onClose={onClose}
  initialFocus={submitButtonRef} // Control initial focus
  restoreFocus // Returns focus to trigger element
/>
```

### Accessibility Testing

All components are tested with:
- **jest-axe** - Automated accessibility testing
- **NVDA & JAWS** - Screen reader compatibility
- **Keyboard navigation** - Manual testing for all interactions
- **Color contrast analyzers** - Visual accessibility validation

---

## Performance

### Bundle Size Optimization

```bash
# Core components only (tree-shaken)
Button:     ~2.5 KB gzipped
Input:      ~3.1 KB gzipped
Modal:      ~4.2 KB gzipped
Select:     ~5.8 KB gzipped
DataGrid:   ~12.3 KB gzipped

# Entire library (if imported at once)
Full bundle: ~45 KB gzipped
```

### Performance Features

- **Tree-Shaking** - Import only what you need
- **Code Splitting** - Lazy load components on demand
- **CSS-in-CSS** - No runtime CSS-in-JS overhead
- **Memoization** - Smart component memoization
- **Virtual Scrolling** - For large lists (Table, DataGrid)
- **Lazy Loading** - Images and heavy components

### Best Practices

```tsx
// ✅ Good - Tree-shakable imports
import { Button, Input } from '@vui/react';

// ❌ Avoid - Imports entire library
import * as VUI from '@vui/react';

// ✅ Good - Lazy load heavy components
const DataGrid = lazy(() => import('@vui/react').then(m => ({ default: m.DataGrid })));

// ✅ Good - Import only required widgets
import { ProductCard } from '@vui/react';
```

---

## Development

### Setup Development Environment

```bash
# Clone repository
git clone https://github.com/vertex-ui/react.git
cd react

# Install dependencies
npm install

# Start Storybook development server
npm run storybook
```

### Available Scripts

```bash
# Development
npm run storybook          # Start Storybook on http://localhost:6006

# Building
npm run build              # Build library for production
npm run build-storybook    # Build static Storybook

# Testing
npm test                   # Run test suite
npm run test:watch         # Run tests in watch mode
npm run test:coverage      # Generate coverage report

# Code Quality
npm run lint               # Lint code with ESLint
npm run format             # Format code with Prettier
npm run type-check         # TypeScript type checking
```

### Project Structure

```
vertex-ui-react/
├── src/
│   ├── components/        # Core UI components
│   │   ├── Button/
│   │   ├── Input/
│   │   └── ...
│   ├── widgets/           # Domain-specific widgets
│   │   ├── ProductCard/
│   │   ├── MetricCard/
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   ├── theme/             # Theme system
│   ├── utils/             # Utility functions
│   └── icons/             # Icon components
├── tests/                 # Test suites
├── stories/               # Storybook stories
├── dist/                  # Build output
└── docs/                  # Documentation
```

### Adding a New Component

```bash
# 1. Create component directory
mkdir src/components/NewComponent

# 2. Create component files
touch src/components/NewComponent/{index.ts,NewComponent.tsx,NewComponent.css}

# 3. Implement component with TypeScript
# 4. Add styles with CSS custom properties
# 5. Write tests
# 6. Create Storybook story
# 7. Update exports in src/index.ts
```

### Testing Guidelines

```tsx
// Example test structure
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('is accessible', async () => {
    const { container } = render(<Button>Accessible</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

---

## Browser Support

### Modern Browsers

@vui/react supports all modern browsers with the following minimum versions:

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Opera | 76+ |
| Samsung Internet | 15+ |

### Mobile Support

- iOS Safari 14+
- Chrome for Android (latest)
- Samsung Internet 15+

### Features & Polyfills

- **ES6+ Features** - Modern JavaScript features are used throughout
- **CSS Custom Properties** - Required for theming (supported in all target browsers)
- **Flexbox & Grid** - Modern layout features
- **No polyfills required** - For supported browsers

---

## Enterprise Support

### Professional Services

[Innostes Solutions Pvt Ltd](https://innostes.com/) offers comprehensive enterprise support for @vui/react:

#### 🎯 Enterprise Licensing
- Volume licensing options
- Priority support channels
- Custom SLA agreements
- Dedicated account management

#### 🛠️ Custom Development
- Custom component development
- Theme customization services
- Integration assistance
- Performance optimization

#### 📚 Training & Onboarding
- Team training sessions
- Best practices workshops
- Architecture consulting
- Migration assistance

#### 🔒 Security & Compliance
- Security audits
- Compliance documentation
- Private registry hosting
- Early security notifications

### Support Channels

- **Email**: [contact@innostes.com](mailto:contact@innostes.com)
- **Website**: [innostes.com](https://innostes.com/)
- **GitHub Issues**: [Report bugs or request features](https://github.com/vertex-ui/react/issues)
- **Documentation**: [vertexui.com](https://vertexui.com/)

---

## Contributing

We welcome contributions from the community! Whether it's bug fixes, new features, documentation improvements, or examples—your help makes @vui/react better for everyone.

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a branch** for your feature or fix
4. **Make your changes** with tests and documentation
5. **Submit a pull request** with a clear description

### Contribution Guidelines

#### Code Standards
- Follow existing code style and conventions
- Write TypeScript with strict mode enabled
- Include comprehensive JSDoc comments
- Maintain 100% test coverage for new code
- Ensure accessibility compliance (WCAG 2.1 AA)

#### Before Submitting
- [ ] Tests pass (`npm test`)
- [ ] Types are correct (`npm run type-check`)
- [ ] Code is formatted (`npm run format`)
- [ ] Storybook stories are updated
- [ ] Documentation is updated
- [ ] Accessibility is verified

#### Pull Request Process
1. Update README.md with details of interface changes
2. Update Storybook stories to showcase new features
3. Add tests for all new functionality
4. Ensure CI/CD pipeline passes
5. Request review from maintainers

### Code of Conduct

This project adheres to a Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to [contact@innostes.com](mailto:contact@innostes.com).

### Ways to Contribute

- 🐛 **Report bugs** - Open detailed bug reports with reproduction steps
- 💡 **Request features** - Suggest new components or improvements
- 📝 **Improve docs** - Fix typos, add examples, clarify concepts
- 🎨 **Design contributions** - Propose UX improvements or new patterns
- 🧪 **Add tests** - Improve test coverage or testing utilities
- 🌍 **Translations** - Help translate documentation

---

## License

MIT © [Innostes Solutions Pvt Ltd](https://innostes.com/)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### What This Means

✅ **Commercial use** - Use in commercial projects  
✅ **Modification** - Modify the source code  
✅ **Distribution** - Distribute the library  
✅ **Private use** - Use privately in your organization  

⚠️ **Limitation** - No warranty provided  
⚠️ **Attribution required** - Copyright notice must be included  

---

## Acknowledgments

### Built With

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Rollup](https://rollupjs.org/) - Module bundler
- [Storybook](https://storybook.js.org/) - Component development
- [Jest](https://jestjs.io/) - Testing framework
- [Testing Library](https://testing-library.com/) - Testing utilities

### Developed By

**Innostes Solutions Pvt Ltd**  
Building enterprise-grade software solutions

- Website: [innostes.com](https://innostes.com/)
- Email: [contact@innostes.com](mailto:contact@innostes.com)
- GitHub: [@vertex-ui](https://github.com/vertex-ui)

---

## Links

### Documentation & Resources

- 📘 **[Official Documentation](https://vertexui.com/)** - Complete guides and API reference
- 📖 **[Storybook](https://vertexui.com/storybook)** - Interactive component explorer
- 📦 **[npm Package](https://www.npmjs.com/package/@vui/react)** - Package registry
- 💻 **[GitHub Repository](https://github.com/vertex-ui/react)** - Source code
- 🐛 **[Issue Tracker](https://github.com/vertex-ui/react/issues)** - Bug reports and feature requests
- 📋 **[Changelog](https://github.com/vertex-ui/react/releases)** - Release history

### Community

- 💬 **[Discussions](https://github.com/vertex-ui/react/discussions)** - Community Q&A
- 🐦 **[Twitter](https://twitter.com/vertexui)** - Latest updates
- 💼 **[LinkedIn](https://linkedin.com/company/innostes)** - Company updates

---

<p align="center">
  <sub>Made with ❤️ by <a href="https://innostes.com/">Innostes Solutions Pvt Ltd</a></sub>
</p>

<p align="center">
  <sub>Part of the <a href="https://github.com/vertex-ui">vertex-ui</a> ecosystem</sub>
</p>
