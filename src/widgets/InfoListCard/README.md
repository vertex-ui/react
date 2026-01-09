# InfoListCard Widget

A widget for displaying a list of key-value pairs, such as properties, specifications, or summary details.

## Features

- **Heading**: Optional title for the list.
- **Layout**: Clean row-based layout for labels and values.
- **Dividers**: Optional separators between rows.
- **Compact Mode**: Reduced spacing for dense information.
- **Flexible Content**: Labels and values can be simple text or custom React nodes.

## Installation

```tsx
import { InfoListCard } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<InfoListCard
  heading="User Details"
  items={[
    { label: 'Name', value: 'John Doe' },
    { label: 'Email', value: 'john@example.com' },
    { label: 'Role', value: 'Admin' }
  ]}
/>
```

## With Dividers

Add visual separation between items.

```tsx
<InfoListCard
  heading="Shipping Info"
  showDividers
  items={[
    { label: 'Address', value: '123 Main St' },
    { label: 'City', value: 'New York' },
    { label: 'Zip', value: '10001' }
  ]}
/>
```

## Custom Content

Render components as values.

```tsx
<InfoListCard
  items={[
    { label: 'Status', value: <Badge variant="success">Active</Badge> },
    { label: 'Last Login', value: '2 hours ago' }
  ]}
/>
```

## Compact Mode

Reduce padding for tight spaces.

```tsx
<InfoListCard
  compact
  items={specs}
/>
```

## API Reference

### InfoListCardProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `InfoListItem[]` | **required** | Data to display |
| `heading` | `string` | - | Card title |
| `showDividers` | `boolean` | `false` | Show row lines |
| `compact` | `boolean` | `false` | Reduce padding |
| `variant` | `'outlined' \| 'elevated' \| 'flat'` | `'outlined'` | Card style |
| `className` | `string` | - | Custom class |

### InfoListItem

| Property | Type | Description |
|----------|------|-------------|
| `label` | `ReactNode` | Key/Label text |
| `value` | `ReactNode` | Value content |
| `labelClass` | `string` | Class for label |
| `valueClass` | `string` | Class for value |
| `hidden` | `boolean` | Hide item conditionally |

## Accessibility

- The component uses semantic structure suitable for definition lists (conceptually), though rendered as flex rows.
- Text contrast ratios follow theme defaults.
