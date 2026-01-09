# Chip Component

Compact elements that represent an input, attribute, or action. Used for filters, contacts, or selections.

## Features

- **Variants**: Filled, Outlined, Light
- **Colors**: Default, Primary, Success, Error, Warning, Info
- **Interaction**: Clickable and Deletable states
- **Media**: Support for Icons and Avatars
- **Sizes**: Small, Medium, Large
- **Accessibility**: Keyboard navigation and ARIA support

## Installation

```tsx
import { Chip } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Chip label="Basic Chip" />
```

## Clickable

Make the chip interactive.

```tsx
<Chip
  label="Clickable"
  onClick={() => console.log('Clicked')}
/>
```

## Deletable

Add a delete action, commonly used for tags or filters.

```tsx
<Chip
  label="Filter"
  onDelete={() => console.log('Deleted')}
/>
```

## Icons and Avatars

```tsx
import { UserIcon } from 'lucide-react';

// With Icon
<Chip icon={<UserIcon />} label="User" />

// With Avatar
<Chip avatar="https://example.com/avatar.jpg" label="John Doe" />
```

## Variants

Visual styles for different contexts.

```tsx
<Chip variant="filled" label="Filled" />
<Chip variant="outlined" label="Outlined" />
<Chip variant="light" label="Light" />
```

## Colors

Semantic color themes.

```tsx
<Chip color="primary" label="Primary" />
<Chip color="success" label="Success" />
<Chip color="warning" label="Warning" />
<Chip color="error" label="Error" />
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | **required** | Text content |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the chip |
| `variant` | `'filled' \| 'outlined' \| 'light'` | `'filled'` | Visual style |
| `color` | `'default' \| 'primary' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'default'` | Color theme |
| `icon` | `ReactNode` | - | Leading icon |
| `avatar` | `string` | - | Leading avatar URL |
| `onDelete` | `(event) => void` | - | Delete handler |
| `onClick` | `(event) => void` | - | Click handler |
| `disabled` | `boolean` | `false` | Disable interaction |
| `className` | `string` | - | Custom class |

## Accessibility

- **Clickable**: Adds `role="button"` and `tabIndex="0"`. Responds to Enter/Space keys.
- **Deletable**: The delete button has `aria-label="Remove {label}"` and can be triggered via keyboard inside the chip context.
- **Images**: Avatar images have empty alt text (`alt=""`) as they are decorative next to the label.
