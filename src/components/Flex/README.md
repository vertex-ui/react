# Flex Component

A layout primitive that provides an easy way to use CSS Flexbox to position and distribute elements.

## Features

- **Direction**: Row, Column, and Reverse variants.
- **Alignment**: Control `justify-content`, `align-items`, and `align-content`.
- **Wrap**: Control wrapping behavior.
- **Gap**: Helper props for managing spacing between items.
- **Sizing**: Props for `flex-grow`, `flex-shrink`, and `flex-basis`.
- **Polymorphic**: Render as different HTML elements (e.g., `section`, `nav`).

## Installation

```tsx
import { Flex } from '@vtx-ui/react';
```

## Basic Usage

Default behavior acts as a flex row with items stretched.

```tsx
<Flex>
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

## Direction & Wrap

```tsx
<Flex direction="column">
  <div>Header</div>
  <div>Content</div>
  <div>Footer</div>
</Flex>

<Flex wrap="wrap">
  {items.map(item => <Card key={item.id} {...item} />)}
</Flex>
```

## Alignment

Control alignment on both axes.

```tsx
<Flex justify="center" align="center">
  <p>Perfectly centered content</p>
</Flex>

<Flex justify="between">
  <div>Left</div>
  <div>Right</div>
</Flex>
```

## Spacing (Gap)

Use the `gap` prop to space items evenly. Accepts numbers (pixels) or strings (CSS units).

```tsx
<Flex gap={16}>
  <Button>Cancel</Button>
  <Button variant="primary">Save</Button>
</Flex>
```

## Flex Item Properties

Control how the container itself behaves if it's nested inside another flex container.

```tsx
<Flex grow={1}>
  I expand to fill available space
</Flex>
```

## Polymorphic

Render as a specific HTML tag for semantic validity.

```tsx
<Flex as="nav" gap={20}>
  <a href="/">Home</a>
  <a href="/about">About</a>
</Flex>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'row' \| 'column' \| 'row-reverse' \| 'column-reverse'` | `'row'` | Flex direction |
| `wrap` | `'nowrap' \| 'wrap' \| 'wrap-reverse'` | `'nowrap'` | Flex wrap |
| `justify` | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly'` | `'start'` | Justify content |
| `align` | `'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'` | `'stretch'` | Align items |
| `gap` | `number \| string` | - | Gap between items |
| `inline` | `boolean` | `false` | Use `inline-flex` |
| `fullWidth` | `boolean` | `false` | Set width to 100% |
| `grow` | `number` | - | `flex-grow` value |
| `shrink` | `number` | - | `flex-shrink` value |
| `basis` | `string \| number` | - | `flex-basis` value |
| `as` | `'div' \| 'section' \| ...` | `'div'` | Root HTML element |

## CSS Customization

The component uses internal CSS variables for gaps:

```css
.vtx-flex {
  --vtx-flex-gap: 0px;
}
```
