# Text Component

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
import { Text } from '@vtx-ui/react';
```

## Basic Usage

Renders body text in a `<p>` tag by default.

```tsx
<Text>Standard body text.</Text>
```

## Variants

Apply preset styles for headings and other types.

```tsx
<Text variant="h1">Heading 1</Text>
<Text variant="subtitle1">Subtitle</Text>
<Text variant="caption">Caption text</Text>
```

## Polymorphic Rendering

Change the semantic HTML element while keeping the visual style (or vice versa).

```tsx
<Text variant="h1" as="h2">
  Visually H1, Semantically H2
</Text>

<Text as="label" htmlFor="email">
  Email Label
</Text>
```

## Colors

Use semantic theme colors or custom values.

```tsx
<Text color="primary">Primary Color</Text>
<Text color="error">Error Message</Text>

// Custom override
<Text textColor="#ff5722">Custom Hex Color</Text>
```

## Truncation

Truncate text with an ellipsis.

```tsx
// Single line
<Text truncate>
  Very long text that will be cut off...
</Text>

// Multi-line (e.g., 3 lines)
<Text lineClamp={3}>
  Long content block that spans multiple lines...
</Text>
```

## Gradient Text

Apply a gradient background to text.

```tsx
<Text
  variant="h1"
  gradient={['#ff9966', '#ff5e62']}
>
  Gradient Headline
</Text>
```

## Formatting

Apply common text transformations.

```tsx
<Text weight="bold">Bold</Text>
<Text italic>Italic</Text>
<Text underline>Underlined</Text>
<Text transform="uppercase">Uppercase</Text>
<Text align="center">Centered</Text>
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
