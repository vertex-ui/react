# Divider Component

A thin line that groups content in lists and layouts. It reinforces visual hierarchy and separation.

## Features

- **Orientations**: Horizontal (default) and Vertical.
- **Content**: Can contain text or components (like Chips) in the middle.
- **Alignment**: Left, Center, or Right alignment for content.
- **Variants**: Full Width, Inset, or Middle.
- **Flexbox Support**: `flexItem` prop for easy integration in flex containers.

## Installation

```tsx
import { Divider } from '@vtx-ui/react';
```

## Basic Usage

Renders a simple horizontal line.

```tsx
<p>Paragraph 1</p>
<Divider />
<p>Paragraph 2</p>
```

## With Content

Embed text or elements within the divider line.

```tsx
<Divider>OR</Divider>

<Divider>
  <Chip label="Section 1" />
</Divider>
```

## Alignment

Control the position of the content.

```tsx
<Divider textAlign="left">Left</Divider>
<Divider textAlign="center">Center</Divider>
<Divider textAlign="right">Right</Divider>
```

## Vertical Divider

Use in flex layouts to separate items horizontally.

```tsx
<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
  <span>Item 1</span>
  <Divider orientation="vertical" flexItem />
  <span>Item 2</span>
</div>
```

## Variants

Control the length and positioning of the line (horizontal mode).

```tsx
<Divider variant="fullWidth" /> {/* Default: spans 100% */}
<Divider variant="inset" />     {/* Indented on the left */}
<Divider variant="middle" />    {/* Indented on both sides */}
```

## Light Mode

A subtler divider for lower contrast needs.

```tsx
<Divider light />
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Axis of the divider |
| `textAlign` | `'left' \| 'center' \| 'right'` | `'center'` | Alignment of children |
| `variant` | `'fullWidth' \| 'inset' \| 'middle'` | `'fullWidth'` | Length style |
| `light` | `boolean` | `false` | Lighter color |
| `flexItem` | `boolean` | `false` | Height adjusts to flex container |
| `children` | `ReactNode` | - | Content to display |
| `component` | `ElementType` | - | Root HTML element |
| `className` | `string` | - | Custom class |

## Accessibility

- Renders as an `<hr>` by default for horizontal separators without children.
- Renders as a `<div>` with `role="separator"` when children are present or vertical.
- Adds `aria-orientation="vertical"` for vertical dividers.
