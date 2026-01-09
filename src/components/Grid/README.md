# Grid Component

A flexible, 12-column responsive layout system used to create complex layouts. It mimics the behavior of CSS Flexbox but with a simplified API for grid systems.

## Features

- **12-Column System**: Standard grid logic.
- **Breakpoints**: `xs`, `sm`, `md`, `lg`, `xl` for responsive design.
- **Spacing**: Consistent gutters between items.
- **Alignment**: Utilities for `justify-content` and `align-items`.
- **Nesting**: Grids can be infinitely nested.

## Installation

```tsx
import { Grid } from '@vtx-ui/react';
```

## Basic Usage

The `container` prop creates a flex container, and `item` prop creates a flex item.

```tsx
<Grid container spacing={2}>
  <Grid item xs={6} md={8}>
    <div>xs=6 md=8</div>
  </Grid>
  <Grid item xs={6} md={4}>
    <div>xs=6 md=4</div>
  </Grid>
</Grid>
```

## Breakpoints

Define how many columns an item should span at different screen widths. The total width is 12 columns.

- `xs`: 0px+
- `sm`: 600px+
- `md`: 960px+
- `lg`: 1280px+
- `xl`: 1920px+

```tsx
<Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={3}>
    <Card />
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Card />
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Card />
  </Grid>
  <Grid item xs={12} sm={6} md={3}>
    <Card />
  </Grid>
</Grid>
```

## Spacing

Controls the gap between items. Values typically map to a spacing scale (e.g., `2` = 16px).

```tsx
<Grid container spacing={4}>
  {/* items */}
</Grid>
```

You can also specify row and column spacing independently:

```tsx
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {/* items */}
</Grid>
```

## Auto-Layout

Let the grid handle widths automatically.

```tsx
<Grid container>
  <Grid item xs>
    {/* Expands to fill available space */}
  </Grid>
  <Grid item width="auto">
    {/* Takes up only as much space as needed */}
  </Grid>
</Grid>
```

## Alignment & Direction

Control the flexbox properties directly.

```tsx
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="stretch"
>
  {/* items */}
</Grid>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `container` | `boolean` | `false` | Acts as flex container |
| `item` | `boolean` | `false` | Acts as flex item |
| `spacing` | `number` | `0` | Space between items |
| `rowSpacing` | `number` | - | Vertical space |
| `columnSpacing` | `number` | - | Horizontal space |
| `xs`, `sm`, `md`, `lg`, `xl` | `number \| 'auto' \| boolean` | - | Column span (1-12) |
| `direction` | `'row' \| 'column' \| ...` | `'row'` | Flex direction |
| `justifyContent` | `'flex-start' \| 'center' \| ...` | - | Justify content |
| `alignItems` | `'flex-start' \| 'center' \| ...` | - | Align items |
| `wrap` | `'nowrap' \| 'wrap' \| ...` | `'wrap'` | Flex wrap |
| `children` | `ReactNode` | - | Content |

## CSS Customization

The grid system uses CSS variables to manage gutters.

```css
:root {
  --vtx-grid-spacing-unit: 8px;
}
```
