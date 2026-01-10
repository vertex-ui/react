# Alert Component

A versatile feedback component for displaying important messages, notifications, and status updates. Supports various styles, variants, and interactive elements.

## Features

- **5 Variants**: Success, Error, Warning, Info, and Neutral
- **4 Visual Styles**: Filled, Outlined, Subtle (default), and Left-accent
- **Interactive**: Dismissible with callback support
- **Flexible Content**: Supports titles, descriptions, and custom children
- **Action Support**: Dedicated slot for action buttons or links
- **Icon Customization**: Custom icons or auto-selected based on variant
- **Accessibility**: ARIA roles and keyboard-accessible close button
- **Responsive**: Full-width option available

## Installation

```tsx
import { Alert } from '@vtx-ui/react';
```

## Basic Usage

```tsx
<Alert variant="info">
  This is an informational message.
</Alert>
```

## Variants

Communicate different states with semantic color variants.

```tsx
<Alert variant="success">Operation successful!</Alert>
<Alert variant="error">Something went wrong.</Alert>
<Alert variant="warning">Please proceed with caution.</Alert>
<Alert variant="info">New updates available.</Alert>
<Alert variant="neutral">System maintenance scheduled.</Alert>
```

## Visual Styles

Choose from different visual treatments to match your design system needs.

```tsx
<Alert alertStyle="subtle">Subtle (Default)</Alert>
<Alert alertStyle="filled">Filled</Alert>
<Alert alertStyle="outlined">Outlined</Alert>
<Alert alertStyle="left-accent">Left Accent</Alert>
```

## Complex Content

Combine titles, descriptions, and custom content.

```tsx
<Alert
  variant="error"
  title="Upload Failed"
  description="The file size exceeds the 10MB limit. Please try compressing your file."
/>
```

## Dismissible

Allow users to dismiss the alert.

```tsx
<Alert
  dismissible
  onClose={() => console.log('Alert closed')}
>
  You can close this message.
</Alert>
```

## With Actions

Add an action button to the alert.

```tsx
<Alert
  variant="warning"
  action={
    <Button size="sm" onClick={handleRetry}>
      Retry
    </Button>
  }
>
  Connection lost.
</Alert>
```

## API Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'success' \| 'error' \| 'warning' \| 'info' \| 'neutral'` | `'info'` | Semantic variant color |
| `alertStyle` | `'filled' \| 'outlined' \| 'subtle' \| 'left-accent'` | `'subtle'` | Visual style of the alert |
| `title` | `string` | - | Alert title (bold) |
| `description` | `string` | - | Alert description text |
| `children` | `ReactNode` | - | Custom content |
| `icon` | `ReactNode \| false` | `undefined` | Custom icon or boolean to hide default icon |
| `dismissible` | `boolean` | `false` | Shows a close button |
| `onClose` | `() => void` | - | Callback when dismissed |
| `action` | `ReactNode` | - | Action element (button/link) |
| `fullWidth` | `boolean` | `false` | Takes up 100% width |
| `size` | `Size` | - | Size of the alert |
| `role` | `string` | `'alert'` | ARIA role |

## Accessibility

- Uses `role="alert"` by default (configurable).
- Close button has `aria-label="Close alert"`.
- Focus management should be handled by the consumer if the alert appears dynamically and needs immediate attention.

## Best Practices

1. **Use appropriate variants**: Match the color to the message urgency (e.g., Red for errors).
2. **Be concise**: Keep titles and descriptions short and actionable.
3. **Action placement**: Use the `action` prop for the primary remediation step.
4. **Dismissible**: Only make alerts dismissible if the user acknowledges the information or if it's not critical.
