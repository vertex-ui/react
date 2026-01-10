# Typography Component

A versatile typography component for rendering text with consistent styling, semantic variants, and utilities for alignment, color, and truncation.

## Features

- **Variants**: H1-H6, Body, Subtitle, Caption, Overline.
- **Polymorphic**: Can render as `h1`, `p`, `span`, `div`, etc.
- **Alignment**: Left, Center, Right, Justify.
- **Truncation**: Single-line (`truncate`) or multi-line (`lineClamp`).
- **Styling**: Utilities for weight, transform, decoration, and gradient.
- **Colors**: Semantic theme colors or custom color overrides.

## Installation

```tsx
import { Typography } from '@vtx-ui/react';
```

## Basic Usage

Renders body text in a `<p>` tag by default.

```tsx
<Typography>Standard body text.</Typography>
```

## Variants

Apply preset styles for headings and other types.

```tsx
<Typography variant="h1">Heading 1</Typography>
<Typography variant="subtitle1">Subtitle</Typography>
<Typography variant="caption">Caption text</Typography>
```

## Polymorphic Rendering

Change the semantic HTML element while keeping the visual style (or vice versa).

```tsx
<Typography variant="h1" as="h2">
  Visually H1, Semantically H2
</Typography>

<Typography as="label" htmlFor="email">
  Email Label
</Typography>
```

## Colors

Use semantic theme colors or custom values.

```tsx
<Typography color="primary">Primary Color</Typography>
<Typography color="error">Error Message</Typography>

// Custom override
<Typography textColor="#ff5722">Custom Hex Color</Typography>
```

## Truncation

Truncate text with an ellipsis.

```tsx
// Single line
<Typography truncate>
  Very long text that will be cut off...
</Typography>

// Multi-line (e.g., 3 lines)
<Typography lineClamp={3}>
  Long content block that spans multiple lines...
</Typography>
```

## Gradient Text

Apply a gradient background to text.

```tsx
<Typography
  variant="h1"
  gradient={['#ff9966', '#ff5e62']}
>
  Gradient Headline
</Typography>
```

## Formatting

Apply common text transformations.

```tsx
<Typography weight="bold">Bold</Typography>
<Typography italic>Italic</Typography>
<Typography underline>Underlined</Typography>
<Typography transform="uppercase">Uppercase</Typography>
<Typography align="center">Centered</Typography>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'h1' \| 'body1' \| ...` | `'body1'` | Visual style |
| `as` | `ElementType` | - | HTML tag |
| `align` | `'left' \| 'center' \| ...` | - | Text alignment |
| `color` | `'primary' \| 'error' \| ...` | - | Theme color |
| `textColor` | `string` | - | CSS color value |
| `weight` | `string \| number` | - | Font weight |
| `truncate` | `boolean` | `false` | Single line ellipsis |
| `lineClamp` | `number` | - | Multi-line limit |
| `gradient` | `string[]` | - | Text gradient colors |
| `noMargin` | `boolean` | `false` | Remove margin |

## Accessibility

- Defaults to semantic elements based on variant (e.g., `h1` for `h1` variant).
- Override with `as` prop to ensure proper document outline (e.g., ensuring heading levels are sequential).
