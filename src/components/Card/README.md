# Card Component

A flexible container component for grouping related content and actions. Supports various styles, interactive states, and layout options including headers and footers.

## Features

- **3 Variants**: Elevated (default), Outlined, and Filled
- **Structure**: Built-in support for Header, Content, and Footer sections
- **Dividers**: Optional visual separators between sections
- **Padding Control**: Preset sizes, custom padding values, or no padding options
- **Interaction**: Hover effects and clickable states
- **Theming**: Fully customizable via CSS variables
- **Accessibility**: Support for keyboard focus when clickable

## Installation

```tsx
import { Card } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Card>
  <p>Simple card content</p>
</Card>
```

## Variants

Choose the visual style that best fits your interface.

```tsx
<Card variant="elevated">Elevated (Default)</Card>
<Card variant="outlined">Outlined</Card>
<Card variant="filled">Filled</Card>
```

## Structure

Organize content using headers and footers.

```tsx
<Card
  header={<h3>Card Title</h3>}
  footer={<Button>Action</Button>}
  divider
>
  <p>Main content area.</p>
</Card>
```

## Padding Control

### No Padding
Useful for full-bleed images or custom inner layouts.

```tsx
<Card noPadding>
  <img src="banner.jpg" alt="Banner" style={{ width: '100%' }} />
  <div style={{ padding: '16px' }}>Content below image</div>
</Card>
```

### Custom Padding
Override default spacing with any valid CSS length.

```tsx
<Card padding="2rem">
  <p>Spacious content</p>
</Card>
```

## Interactive Cards

Make cards actionable or interactive.

```tsx
<Card
  hoverable
  clickable
  onClick={() => console.log('Card clicked')}
>
  <h3>Interactive Card</h3>
  <p>Click me to trigger an action.</p>
</Card>
```

## Sizes

Control the default padding and border radius.

```tsx
<Card size="sm">Small</Card>
<Card size="md">Medium</Card>
<Card size="lg">Large</Card>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'elevated' \| 'outlined' \| 'filled'` | `'elevated'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Padding and radius size |
| `header` | `ReactNode` | - | Header content |
| `footer` | `ReactNode` | - | Footer content |
| `divider` | `boolean` | `false` | Show lines between sections |
| `noPadding` | `boolean` | `false` | Remove all padding |
| `padding` | `string` | - | Custom padding value |
| `hoverable` | `boolean` | `false` | Add shadow on hover |
| `clickable` | `boolean` | `false` | Add pointer cursor and focus styles |
| `onClick` | `() => void` | - | Click handler |
| `children` | `ReactNode` | - | Card body content |
| `className` | `string` | - | Custom class |
| `style` | `CSSProperties` | - | Inline styles |

## Styling & Theming

Customize the card using CSS variables.

```css
.vtx-card {
  --vtx-card-bg: #fff;
  --vtx-card-border-color: #e2e8f0;
  --vtx-card-border-radius: 8px;
  --vtx-card-padding: 1rem;
  --vtx-card-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
```

## Accessibility

- When `clickable` is true:
  - Adds `tabIndex="0"` (unless overridden)
  - Adds `cursor: pointer`
  - Ensures the card is focusable via keyboard
- Structure allows screen readers to navigate header/content/footer logically.
