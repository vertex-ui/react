# Container Component

A layout component that centers your content horizontally and limits its maximum width. It's the most basic layout element.

## Features

- **Responsive Widths**: Automatically adjusts max-width based on screen size breakpoints.
- **Fluid Option**: Can span the full width of the viewport.
- **Gutters**: Built-in horizontal padding that can be disabled.
- **Flexibility**: Configurable `maxWidth` constraints.

## Installation

```tsx
import { Container } from '@vtx-ui/react';
```

## Basic Usage

Centers content with a default maximum width (`lg`).

```tsx
<Container>
  <h1>Page Title</h1>
  <p>Main content area.</p>
</Container>
```

## Fluid Container

Use `fluid` for a full-width container that spans the entire viewport width.

```tsx
<Container fluid>
  <FullWidthBanner />
</Container>
```

## Max Widths

Restrict the width to specific breakpoints.

```tsx
<Container maxWidth="xs">Extra Small (e.g., small forms)</Container>
<Container maxWidth="sm">Small</Container>
<Container maxWidth="md">Medium</Container>
<Container maxWidth="lg">Large (Default)</Container>
<Container maxWidth="xl">Extra Large</Container>
```

## Gutters

Containers have horizontal padding by default. Use `disableGutters` to remove it.

```tsx
<Container disableGutters>
  <ContentWithoutPadding />
</Container>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `maxWidth` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'fluid' \| false` | `'lg'` | Max-width constraint |
| `fluid` | `boolean` | `false` | Alias for `maxWidth="fluid"` |
| `disableGutters` | `boolean` | `false` | Remove horizontal padding |
| `children` | `ReactNode` | - | Content |
| `className` | `string` | - | Custom class name |

## CSS Variables

```css
:root {
  --vtx-container-padding-x: 1rem;
  /* Breakpoint widths are typically handled via media queries in the CSS */
}
```

## Accessibility

The `Container` is a standard `<div>` and does not carry semantic meaning on its own. It is a layout utility.
