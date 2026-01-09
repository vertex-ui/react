# Badge Component

Small status descriptors for UI elements. Used to highlight status, display counts, or tag items.

## Features

- **Variants**: Neutral (default), Primary, Success, Warning, Error, Info
- **Styles**: Filled (default) or Outlined
- **Shapes**: Standard or Pill (fully rounded)
- **Status Dot**: Optional dot indicator for status updates
- **Icons**: Support for leading icons
- **Truncation**: `maxLength` prop to limit text length
- **Removable**: Built-in close button and callback for tag-like behavior
- **Sizes**: Configurable sizes (integrated with theme)

## Installation

```tsx
import { Badge } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Badge>Default Badge</Badge>
```

## Variants

Use variants to communicate meaning.

```tsx
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="neutral">Neutral</Badge>
```

## Styles & Shapes

```tsx
// Pill shape
<Badge pill>New</Badge>

// Outlined style
<Badge variant="primary" outline>
  Outlined
</Badge>

// With Status Dot
<Badge variant="success" dot>
  Online
</Badge>
```

## With Icon

```tsx
import { StarIcon } from 'lucide-react';

<Badge icon={<StarIcon size={12} />}>
  Featured
</Badge>
```

## Removable Badge

Useful for tags or filters.

```tsx
<Badge onRemove={() => console.log('Removed')}>
  Filter
</Badge>
```

## Truncation

Automatically truncate long text.

```tsx
<Badge maxLength={10}>
  Very long text content that needs to be shortened
</Badge>
// Renders: "Very long ..."
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'neutral' \| 'primary' \| 'success' \| 'warning' \| 'error' \| 'info'` | `'neutral'` | Visual style |
| `size` | `Size` | - | Badge size |
| `pill` | `boolean` | `false` | Rounded ends |
| `dot` | `boolean` | `false` | Show status dot |
| `outline` | `boolean` | `false` | Outline style |
| `maxLength` | `number` | - | Max characters |
| `icon` | `ReactNode` | - | Leading icon |
| `onRemove` | `(event) => void` | - | Callback for remove button |
| `children` | `ReactNode` | - | Badge content |

## Accessibility

- `aria-label` is set to "Remove badge" on the close button.
- Status dots and icons are hidden from screen readers (`aria-hidden="true"`) as the text content should convey the meaning, or the badge itself acts as the label.
