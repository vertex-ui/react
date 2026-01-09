# EmptyStateWidget

A versatile empty state widget component with multiple themes and contexts for displaying friendly messages when content is unavailable.

## Features

- **6 Professional Themes**: minimal, modern, professional, playful, technical, elegant
- **6 Pre-built Contexts**: general, search, data, notification, cart, file
- **Custom SVG Icons**: Unique icons for each context
- **SEO-Friendly**: Uses semantic HTML and Link wrapping for buttons
- **Fully Responsive**: Mobile-optimized with utility classes
- **Flexible Actions**: Support for buttons, links, and custom handlers
- **Customizable Backgrounds**: Override theme backgrounds with custom colors/gradients
- **Multiple Layout Options**: Centered/left-aligned, compact/full, with/without illustrations

## Installation

The component is part of the Widget system:

```tsx
import { EmptyStateWidget, Widget } from './components/Widget';
```

## Basic Usage

### With Widget Component

```tsx
const config: WidgetConfig = {
  type: 'emptyState',
  data: {
    type: 'cart',
    actions: [
      { label: 'Browse Products', icon: 'search', variant: 'primary' },
    ],
  },
  settings: {
    theme: 'modern',
    variant: 'primary',
  },
};

<Widget config={config} />
```

### Direct Component Usage

```tsx
<EmptyStateWidget
  data={{
    type: 'search',
    title: 'No Results Found',
    message: 'Try different keywords or browse our categories.',
    actions: [
      { label: 'Clear Search', icon: 'refresh', variant: 'primary' },
      { label: 'Browse All', href: '/browse', variant: 'outline' },
    ],
  }}
  settings={{
    theme: 'modern',
    variant: 'primary',
  }}
/>
```

## Available Types

- **general**: Default empty state for any context
- **search**: No search results found
- **data**: No data available (tables, charts, etc.)
- **notification**: No notifications or messages
- **cart**: Empty shopping cart
- **file**: No files or documents

Each type has default title, message, and icon.

## Themes

### Modern (Default)
Gradient background with subtle shadows, perfect for modern web applications.

### Minimal
Clean, no-background design for subtle integration.

### Professional
Bordered box with neutral colors, ideal for business applications.

### Playful
Radial gradients and vibrant colors with hover effects.

### Technical
Dark theme with green accents for developer tools and dashboards.

### Elegant
Premium feel with backdrop blur and elegant shadows.

## Actions

Actions support both buttons and links:

```tsx
actions: [
  {
    label: 'Add Item',
    icon: 'plus',
    variant: 'primary',
    onClick: () => console.log('clicked'),
  },
  {
    label: 'Learn More',
    href: '/docs',
    variant: 'outline',
    external: true,
  },
]
```

### Available Icons
- `plus` / `add`: Plus icon
- `refresh`: Refresh icon
- `search`: Search icon

## Settings Options

```tsx
settings: {
  theme?: 'minimal' | 'modern' | 'professional' | 'playful' | 'technical' | 'elegant';
  variant?: 'primary' | 'danger' | 'warning' | 'info';
  showIllustration?: boolean; // Default: true
  centered?: boolean; // Default: true
  compact?: boolean; // Default: false
  backgroundColor?: string; // Custom background
}
```

## Examples

### Empty Cart

```tsx
<EmptyStateWidget
  data={{
    type: 'cart',
    title: 'Your Cart is Empty',
    message: 'Add items to your cart to get started.',
    actions: [
      { label: 'Browse Products', href: '/products', icon: 'search' },
    ],
  }}
  settings={{ theme: 'modern' }}
/>
```

### Dashboard No Data

```tsx
<EmptyStateWidget
  data={{
    type: 'data',
    title: 'No Analytics Data',
    message: 'Connect your first data source to start tracking.',
    actions: [
      { label: 'Connect Source', icon: 'plus', variant: 'primary' },
      { label: 'View Docs', href: '/docs', variant: 'outline' },
    ],
  }}
  settings={{ theme: 'professional' }}
/>
```

### Search No Results

```tsx
<EmptyStateWidget
  data={{
    type: 'search',
    actions: [
      { label: 'Clear Search', icon: 'refresh', variant: 'primary' },
    ],
  }}
  settings={{ theme: 'modern' }}
/>
```

### Custom Background

```tsx
<EmptyStateWidget
  data={{
    type: 'general',
    actions: [{ label: 'Get Started', icon: 'plus' }],
  }}
  settings={{
    theme: 'elegant',
    backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  }}
/>
```

### Compact Mode (Sidebar/Card)

```tsx
<EmptyStateWidget
  data={{
    type: 'notification',
    actions: [{ label: 'Refresh', icon: 'refresh' }],
  }}
  settings={{
    theme: 'minimal',
    compact: true,
  }}
/>
```

### Left Aligned

```tsx
<EmptyStateWidget
  data={{
    type: 'data',
    title: 'No Projects',
    actions: [{ label: 'Create Project', icon: 'plus' }],
  }}
  settings={{
    theme: 'modern',
    centered: false,
  }}
/>
```

## TypeScript Types

```tsx
interface EmptyStateWidgetData {
  type?: 'general' | 'search' | 'data' | 'notification' | 'cart' | 'file';
  title?: string;
  message?: string;
  customIcon?: React.ReactNode;
  actions?: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: 'add' | 'plus' | 'refresh' | 'search';
    variant?: 'primary' | 'outline' | 'ghost';
    external?: boolean;
  }>;
  additionalInfo?: string;
}

interface EmptyStateWidgetSettings {
  theme?: 'minimal' | 'modern' | 'professional' | 'playful' | 'technical' | 'elegant';
  variant?: 'primary' | 'danger' | 'warning' | 'info';
  showIllustration?: boolean;
  centered?: boolean;
  compact?: boolean;
  backgroundColor?: string;
}
```

## Styling

The component uses utility classes for spacing:
- `mb-4`, `mb-6`, `mb-8`: Bottom margins
- `mt-2`, `mt-8`: Top margins

All spacing is responsive using the utility class system defined in `parseClass.ts`.

## Accessibility

- Semantic HTML (h2, p tags)
- ARIA labels on illustrations and buttons
- Link wraps buttons for proper SEO
- Keyboard navigation support

## Related Components

- [ErrorPageWidget](./ErrorPageWidget.tsx) - For error pages (404, 500, etc.)
- [Widget](../Widget.tsx) - Parent widget system
- [Button](../../Button) - Action buttons
- [Text](../../Text) - Typography
- [Flex](../../Flex) - Layout container
