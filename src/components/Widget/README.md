# Widget Component

A universal widget renderer that dynamically displays different types of widgets based on configuration. It serves as the entry point for the widget system.

## Features

- **Dynamic Rendering**: Renders different widget types based on `type` prop.
- **Grid Layout**: Built-in support for grid layouts via `IntelligentGrid`.
- **Supported Types**: Metric, Info, Product, Order, List, Text, Header, Carousel, Testimonial, ContentBlock.
- **Themeable**: Unified settings and theming support.

## Installation

```tsx
import { Widget } from '@vtx-ui/react';
```

## Basic Usage

Render a single widget by type.

```tsx
<Widget
  config={{
    type: 'metric',
    data: { label: 'Revenue', value: '$10,000' }
  }}
/>
```

## Supported Widget Types

- `metric`: Simple stats (Label + Value).
- `info`: Informational cards.
- `product`: Product display cards.
- `order`: Order summary cards.
- `list`: Lists of items.
- `text`: Rich text content.
- `header`: Page headers.
- `carousel`: Image or content carousels.
- `testimonial`: Customer quotes.
- `gridCarousel`: Grid based carousels.
- `contentBlock`: Generic content containers.

## Grid Layout

Render a collection of widgets in a grid.

```tsx
<Widget
  config={{
    type: 'grid',
    data: {
      widgets: [
        { type: 'metric', data: { label: 'Users', value: '100' } },
        { type: 'metric', data: { label: 'Sales', value: '50' } },
        // ... more widgets
      ]
    },
    grid: { columns: 2, gap: 16 }
  }}
/>
```

## Settings & Theming

Apply settings globally or per widget.

```tsx
<Widget
  config={{
    type: 'metric',
    data: { label: 'Sales', value: '$500' },
    settings: {
      theme: 'dark',
      variant: 'secondary'
    }
  }}
/>
```

## API Reference

### WidgetProps

| Prop | Type | Description |
|------|------|-------------|
| `config` | `WidgetConfig` | Configuration object |
| `className` | `string` | Custom class |
| `style` | `CSSProperties` | Inline styles |

### WidgetConfig Interface

```tsx
interface WidgetConfig {
  type: string; // 'metric' | 'grid' | ...
  data: any;    // Data specific to the widget type
  settings?: WidgetSettings;
  grid?: GridConfig; // Only for grid/list types
  theme?: WidgetTheme; // Legacy support
  variant?: WidgetVariant; // Legacy support
  size?: 'sm' | 'md' | 'lg'; // Legacy support
}
```

## Accessibility

- Widgets should handle their own accessibility needs (e.g., proper headings in HeaderWidget, list roles in ListWidget).
- The main `Widget` component acts as a router/container.
